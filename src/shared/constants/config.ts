export const APP_CONFIG = {
  APP_NAME: "Omuenyo",
  APP_DESCRIPTION: "Plataforma de gestão agrícola inteligente",

  // API
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  API_TIMEOUT: 10000,

  // Authentication
  TOKEN_KEY: "auth_token",
  USER_KEY: "user_data",

  // Pagination
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,

  // File Upload
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_FILE_TYPES: ["image/jpeg", "image/png", "image/webp"],

  // UI
  ANIMATION_DURATION: 0.3,
  TOAST_DURATION: 3000,
};
