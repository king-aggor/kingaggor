# build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY .. ./

RUN npm run build

# production stage
FROM alpine:latest AS production

WORKDIR /app

COPY --from=build /app/dist ./
