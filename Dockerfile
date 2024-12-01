# syntax = docker/dockerfile:1

# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.1.38-alpine
FROM oven/bun:${BUN_VERSION} AS base

LABEL fly_launch_runtime="Deno"

# Set up the working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base AS build

# Install node modules
COPY bun.lockb package.json ./
RUN bun install

# Copy application code
COPY . .

# Set application environment variables
ARG NEXT_PUBLIC_PB_URL
ENV NEXT_PUBLIC_PB_URL=${NEXT_PUBLIC_PB_URL}

# Build application
RUN bun run build

# Final stage for app image
FROM base AS build

RUN deno install
RUN deno task build

# Expose port and run the Deno application
EXPOSE 3000
CMD [ "bun", "run", "start" ]