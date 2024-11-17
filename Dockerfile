# syntax = docker/dockerfile:1

# Adjust DENO_VERSION as desired
ARG DENO_VERSION=alpine-2.0.6
FROM denoland/deno:${DENO_VERSION} AS base

LABEL fly_launch_runtime="Deno"

# Set up the working directory
WORKDIR /app

# Set production environment
ENV DENO_ENV="production"

# Copy application code and dependencies
COPY . .

# Set application environment variables
ARG NEXT_PUBLIC_PB_URL
ENV NEXT_PUBLIC_PB_URL=${NEXT_PUBLIC_PB_URL}

# Final stage for app image
FROM base AS build

RUN deno install
RUN deno task build

# Expose port and run the Deno application
EXPOSE 3000
CMD ["deno", "task", "start"]