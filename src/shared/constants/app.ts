// Application-wide constants

export const APP_NAME = "Omuenyo ovìkula";
export const APP_LOCATION = "Angola";
export const COMPANY_YEAR = 2026;

export const APP_CONFIG = {
  name: APP_NAME,
  location: APP_LOCATION,
  description: "IA para diagnóstico de doenças em plantas",
  tagline: "Transformando a agricultura em Angola",
} as const;

export const CURRENCY = {
  CODE: "Kz",
  SYMBOL: "Kz",
  COUNTRY: "Angola",
} as const;

export const API_CONFIG = {
  TIMEOUT: 30000, // 30 seconds
  RETRIES: 3,
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
} as const;

export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.6,
    SLOW: 0.9,
  },
  DELAY: {
    SHORT: 0.1,
    MEDIUM: 0.2,
    LONG: 0.5,
  },
} as const;

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
} as const;
