export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  REFRESH_TOKEN: "/auth/refresh",
  ME: "/auth/me",

  // Users
  USERS: "/users",
  USER: (id: string) => `/users/${id}`,
  UPDATE_PROFILE: "/users/profile",

  // Products
  PRODUCTS: "/products",
  PRODUCT: (id: string) => `/products/${id}`,

  // Orders
  ORDERS: "/orders",
  ORDER: (id: string) => `/orders/${id}`,
};
