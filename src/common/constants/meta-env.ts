import { z } from 'zod';

export enum AppEnv {
  DEV = 'development',
  PRO = 'production',
  STAGING = 'staging',
}

export const metaEnvSchema = z.object({
  MODE: z.nativeEnum(AppEnv).default(AppEnv.DEV),
  BASE_URL: z.string().default('/'),
  DEV: z.boolean().default(true),
  PROD: z.boolean().default(false),
  SSR: z.boolean().default(false),
  VITE_APP_ENV: z.nativeEnum(AppEnv).default(AppEnv.PRO),
  VITE_CLIENT_ID: z.string({
    required_error: 'VITE_CLIENT_ID is required',
  }),
  VITE_CLIENT_SECRET: z.string({
    required_error: 'VITE_CLIENT_SECRET is required',
  }),
});

export const metaEnv = metaEnvSchema.parse(import.meta.env);
