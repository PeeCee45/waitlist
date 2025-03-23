# =========================
# BASE IMAGE
# =========================
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install Corepack and enable pnpm globally
RUN npm install -g corepack@latest && corepack enable && corepack prepare pnpm@latest --activate

# Set PNPM_HOME and update PATH
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH="$PNPM_HOME:$PATH"

# Install Turbo globally
RUN pnpm add -g turbo@2.3.0

# =========================
# BUILD STAGE
# =========================
FROM base AS builder

COPY . .

RUN turbo prune waitlist --docker

# =========================
# INSTALLER STAGE
# =========================
FROM base AS installer
WORKDIR /app

# Copy lockfiles and package manifests
COPY --from=builder /app/out/json/ .

# Install dependencies
RUN pnpm install

# Copy full source for building
COPY --from=builder /app/out/full/ .

# Build the project
RUN pnpm turbo build

# =========================
# FINAL PRODUCTION IMAGE
# =========================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs 
RUN adduser --system --uid 1001 nextjs

# Ensure the working directory is owned by the correct user
RUN chown -R nextjs:nodejs /app

USER nextjs

# Copy built application
COPY --from=installer --chown=nextjs:nodejs /app/apps/waitlist/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/waitlist/.next/static ./apps/waitlist/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/waitlist/public ./apps/waitlist/public

# Expose the port (if needed)
EXPOSE 3000

# Start the application
CMD ["node", "apps/waitlist/server.js"]
