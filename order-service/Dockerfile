FROM node:22-alpine AS builder
WORKDIR /app/order-service
COPY package.json ./
COPY package-lock.json ./
WORKDIR /app/order-service
RUN npm install

FROM node:22-alpine 
WORKDIR /app/order-service
COPY --from=builder /app/order-service/node_modules ./node_modules
COPY package.json . 
COPY /models ./models
COPY /middleware ./middleware
COPY index.js . 
EXPOSE 3000
CMD ["npm","start"]
