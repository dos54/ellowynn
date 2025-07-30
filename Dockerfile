FROM node:24-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Production image
FROM node:24-alpine

WORKDIR /app
COPY --from=builder /app ./

RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
