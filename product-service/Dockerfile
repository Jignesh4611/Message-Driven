FROM node:22-alpine AS builder
WORKDIR /app/product-service
COPY package.json .
COPY package-lock.json .
WORKDIR /app/product-service
RUN npm install 

FROM node:22-alpine
WORKDIR /app/product-service
COPY --from=builder ./app/product-service/node_modules ./node_modules
COPY package.json . 
COPY /routes ./routes
COPY /models ./models
COPY /middleware ./middleware
COPY index.js .
EXPOSE 3000
CMD ["npm",start]