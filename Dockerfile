FROM node:alpine
WORKDIR /app

COPY package*.json ./
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
