FROM node:18.14.2-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

CMD npm run dev