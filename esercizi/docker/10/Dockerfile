FROM alpine
RUN apk update && apk add nodejs && apk add npm
EXPOSE 3000
COPY server.js /app/
COPY package.json /app/
WORKDIR /app
RUN npm install
ENTRYPOINT ["node", "/app/server.js"]
