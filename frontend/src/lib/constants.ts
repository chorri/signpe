export const FIREBASE_ENV = {
  API_KEY: import.meta.env.VITE_FIREBASE_API_KEY as string,
  AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  APP_ID: import.meta.env.VITE_FIREBASE_APP_ID as string,
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  DASHBOARD: '/dashboard',
  SETUP_USER: '/setup-user',
  INTRODUCTION: '/introduction',
}
