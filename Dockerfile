FROM node:25-alpine3.21

COPY . /app

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]