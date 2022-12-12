FROM node:16-alpine

LABEL MAINTAINER="Augen Dev team"

EXPOSE 3000

RUN mkdir /app
WORKDIR /app

COPY . /app
COPY ./next.config.js /app

RUN npm install
RUN npm run build

CMD npm run start