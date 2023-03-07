FROM node:16

WORKDIR /app

COPY package*.json .

RUN apt-get update
RUN apt-get install lsof
RUN npm install
RUN npm run drop
RUN npm run prestart
RUN npm run seed
COPY . .

ARG EnvironmentVariable
