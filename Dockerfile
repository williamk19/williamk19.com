# syntax = docker/dockerfile:1

# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.1.38
FROM oven/bun:${BUN_VERSION} AS base

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base AS build

# Copy application code
COPY . .

# Install node modules
COPY bun.lockb package.json ./
RUN bun install

# Set application environment variables
ARG NEXT_PUBLIC_PB_URL
ENV NEXT_PUBLIC_PB_URL=${NEXT_PUBLIC_PB_URL}

# Build application
RUN bun run build

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "run", "start" ]