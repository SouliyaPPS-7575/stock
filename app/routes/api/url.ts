
export const isDevelopment = import.meta.env.MODE === 'development';

export const DEPLOY_URL = isDevelopment ? 'http://localhost:3000' : import.meta.env.VITE_BASE_URL;