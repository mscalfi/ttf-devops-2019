FROM alpine
RUN apk update && apk add nodejs
COPY index.js /app/
ENTRYPOINT ["node", "/app/index.js"]
