import axios from "axios";

const SHOPIFY_API_URL = process.env.REACT_APP_SHOPIFY_API_URL;
const SHOPIFY_ACCESS_TOKEN = process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN;

const shopifyRequest = async (query, variables = {}) => {
  try {
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
        }
      }
    }
  `;
  const data = await shopifyRequest(mutation);
  return data?.cartCreate?.cart;
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
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    title
                  }
                  image {
                    src
                  }
                  price {
                    amount
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
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

// Add an item to the cart
export const addToCart = async (cartId, variantId, quantity) => {
  const mutation = `
    mutation ($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
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
                    product {
                      title
                    }
                    image {
                      src
                    }
                    price {
                      amount
                    }
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  };

  try {
    const data = await shopifyRequest(mutation, variables);

    // Handle Shopify user errors
    if (data?.cartLinesAdd?.userErrors?.length) {
      console.error("Add to Cart Error:", data.cartLinesAdd.userErrors);
      throw new Error(data.cartLinesAdd.userErrors[0].message);
    }

    return data?.cartLinesAdd?.cart;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Remove an item from the cart
export const removeFromCart = async (cartId, lineId) => {
  const mutation = `
    mutation ($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
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
                    product {
                      title
                    }
                    image {
                      src
                    }
                    price {
                      amount
                    }
                    selectedOptions {
                      name
                      value
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
  const variables = {
    cartId,
    lineIds: [lineId],
  };

  const data = await shopifyRequest(mutation, variables);
  return data?.cartLinesRemove?.cart;
};

// Update item quantity in the cart
export const updateCartQuantity = async (cartId, lineId, quantity) => {
  const mutation = `
    mutation ($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
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
                    product {
                      title
                    }
                    image {
                      src
                    }
                    price {
                      amount
                    }
                    selectedOptions {
                      name
                      value
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
  const variables = {
    cartId,
    lines: [{ id: lineId, quantity }],
  };

  const data = await shopifyRequest(mutation, variables);
  return data?.cartLinesUpdate?.cart;
};

// Shopify User Login and Signup
export const loginCustomer = async (email, password) => {
  const mutation = `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
  `;

  const variables = {
    input: {
      email,
      password,
    },
  };

  try {
    const response = await shopifyRequest(mutation, variables);
    const data = response.data.customerAccessTokenCreate;

    if (data.customerUserErrors.length) {
      throw new Error(data.customerUserErrors[0].message);
    }

    return data.customerAccessToken;
  } catch (error) {
    console.error("Error logging in customer: ", error);
    throw error;
  }
};

export const logoutCustomer = async (token) => {
  const mutation = `
  mutation customerAccessTokenDelete($customerAccessToken: String!) {
    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
      deletedAccessToken
      deletedCustomerAccessTokenId
      userErrors {
        field
        message
      }
    }`;

  const variables = { customerAccessToken: token };

  try {
    const response = await shopifyRequest(mutation, variables);
    const data = response.data.customerAccessTokenDelete;

    if (data.userErrors.length) {
      throw new Error(data.userErrors[0].message);
    }
    return true; // Successful Logout
  } catch (error) {
    console.error("Error logging out customer:", error);
    throw error;
  }
};

export const fetchCustomerData = async (token) => {
  const query = `
    query customer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        firstName
        lastName
        email
        orders(first: 5) {
          edges {
            node {
              id
              orderNumber
              totalPrice {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const variables = { customerAccessToken: token };

  try {
    const response = await shopifyRequest(query, variables);
    return response.data.customer;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
};
