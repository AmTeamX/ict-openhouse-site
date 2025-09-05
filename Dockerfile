# Base image with pnpm and turbo installed
FROM node:alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm add --location=global pnpm turbo

# Prune and prepare monorepo for Docker build
FROM base AS builder
WORKDIR /app
COPY . .
RUN turbo prune --scope=web --docker
RUN rm -rf /app/out/full/*/*/node_modules

# Install dependencies for production
FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install
COPY --from=builder /app/out/full/ .
COPY turbo.json ./turbo.json

# Build Next.js app with environment variables
ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_APP_BASE_URL
ARG NEXT_PUBLIC_LIFF_ID
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_APP_BASE_URL=$NEXT_PUBLIC_APP_BASE_URL
ENV NEXT_PUBLIC_LIFF_ID=$NEXT_PUBLIC_LIFF_ID
RUN turbo run build --filter=web

# Final runtime image
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy only necessary files and folders
COPY --from=installer /app/apps/web/next.config.js ./apps/web/next.config.js
COPY --from=installer /app/apps/web/next-i18next.config.js ./apps/web/next-i18next.config.js
COPY --from=installer /app/apps/web/package.json ./apps/web/package.json
COPY --from=installer /app/node_modules ./node_modules
COPY --from=installer /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=installer /app/apps/web/public ./apps/web/public
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next ./apps/web/.next

WORKDIR /app/apps/web
ENV TZ=Asia/Bangkok

CMD ["pnpm", "start"]