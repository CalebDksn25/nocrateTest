import axios from "axios";

const SHOPIFY_API_URL =
  "https://xxp1rp-ay.myshopify.com/api/2023-01/graphql.json"; // Replace with your Shopify store URL
const SHOPIFY_ACCESS_TOKEN = "8cdeb3974049175807f309227c67fddb"; // Replace with your Shopify access token

export const fetchCart = async (cartId) => {
  const query = `
    query {
      cart(id: "${cartId}") {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                  }
                  product {
                    title
                    images(first: 1) {
                      edges {
                        node {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await axios.post(
    SHOPIFY_API_URL,
    { query },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
      },
    }
  );

  return response.data.data.cart.lines.edges;
};

export const addToCart = async (cartId, variantId, quantity) => {
  const mutation = `
    mutation {
      cartLinesAdd(cartId: "${cartId}", lines: [{ merchandiseId: "${variantId}", quantity: ${quantity} }]) {
        cart {
          id
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                    }
                    product {
                      title
                      images(first: 1) {
                        edges {
                          node {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      SHOPIFY_API_URL,
      { query: mutation },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
        },
      }
    );

    if (response.data.errors) {
      console.error("Shopify API errors:", response.data.errors);
      throw new Error(response.data.errors[0].message);
    }

    if (!response.data.data || !response.data.data.cart) {
      throw new Error("Invalid response from Shopify API");
    }

    return response.data.data.cart.lines.edges;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
