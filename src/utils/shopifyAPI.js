import axios from "axios";

const SHOPIFY_API_URL =
  "https://xxp1rp-ay.myshopify.com/api/2023-07/graphql.json";
const SHOPIFY_ACCESS_TOKEN = "8cdeb3974049175807f309227c67fddb";

const shopifyRequest = async (query, variables = {}) => {
  try {
    console.log("Shopify API Request:", { query, variables }); // Debug log
    const response = await axios.post(
      SHOPIFY_API_URL,
      { query, variables },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
        },
      }
    );
    console.log("Shopify API Response:", response.data.data); // Debug log
    return response.data.data;
  } catch (error) {
    console.error("Shopify API Error:", error.response?.data || error.message);
    throw error;
  }
};

// Create a new cart
export const createCart = async () => {
  const mutation = `
    mutation {
      cartCreate {
        cart {
          id
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                  }
                }
                quantity
              }
            }
          }
        }
      }
    }
  `;
  const data = await shopifyRequest(mutation);
  return data?.cartCreate?.cart;
};

// Add an item to the cart
export const addToCart = async (cartId, variantId, quantity) => {
  const mutation = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                    }
                  }
                }
                quantity
              }
            }
          }
        }
      }
    }
  `;
  const variables = {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  };
  const data = await shopifyRequest(mutation, variables);
  return data?.cartLinesAdd?.cart;
};

// Fetch cart details
export const fetchCart = async (cartId) => {
  const query = `
    query cart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                  }
                }
              }
              quantity
            }
          }
        }
      }
    }
  `;
  const variables = { cartId };
  const data = await shopifyRequest(query, variables);
  return data?.cart;
};
