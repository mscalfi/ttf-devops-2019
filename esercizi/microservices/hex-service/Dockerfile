FROM node:alpine
COPY . .
WORKDIR /dist
RUN npm install
WORKDIR /dist/hex-service/src
EXPOSE 3000
CMD ["node", "HttpServer.js"]