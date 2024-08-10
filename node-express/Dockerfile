FROM node:20.15.1-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

CMD npm run start:dev