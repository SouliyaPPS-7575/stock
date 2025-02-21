// ✅ Environment Check
export const isDevelopment = import.meta.env.MODE === 'development';

export const DEPLOY_URL = isDevelopment
  ? process.env.PATH_URL_LOCAL
  : import.meta.env.VITE_BASE_URL || process.env.POCKETBASE_URL;
