FROM node:16

WORKDIR /app

COPY package*.json .

RUN apt-get update
RUN apt-get install lsof
RUN npm install
RUN npx sequelize-cli db:drop
RUN npx sequelize-cli db:create && npx sequelize-cli db:migrate
RUN npx sequelize-cli db:seed:all

COPY . .

ARG EnvironmentVariable
