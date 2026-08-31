FROM node:22-alpine AS builder
WORKDIR /app/auth-service
COPY package.json ./
COPY package-lock.json ./
WORKDIR /app/auth-service
RUN npm install

FROM node:22-alpine 
WORKDIR /app/auth-service
COPY --from=builder /app/auth-service/node_modules ./node_modules
COPY package.json . 
COPY /models ./models
COPY /routes ./routes
COPY /middleware ./middleware
COPY index.js . 
EXPOSE 3000
CMD ["npm","start"]
