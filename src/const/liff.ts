import { env } from '~/config/env'

export const LIFF_ID = env.NEXT_PUBLIC_LIFF_ID

export const getLiffUrl = (path: string) =>
  `https://liff.line.me/${LIFF_ID}${path}`
