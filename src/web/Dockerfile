# Dockerfile

# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy lockfile & manifest, install deps via yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy rest of the source and build
COPY . .
RUN yarn build

# 2) Run stage
FROM node:20-alpine AS runner
WORKDIR /app

# Install a lightweight static server
RUN yarn global add serve

# Copy the built assets
COPY --from=builder /app/dist ./dist

# Serve on port 4173 (matches your Traefik service definition)
CMD ["serve", "-s", "dist", "-l", "4173"]
