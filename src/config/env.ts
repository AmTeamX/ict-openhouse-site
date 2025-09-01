import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
  },
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string(),
    NEXT_PUBLIC_APP_BASE_URL: z.string(),
    NEXT_PUBLIC_LIFF_ID: z.string(),
    NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production', 'test']),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
    NEXT_PUBLIC_LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID,
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
})
