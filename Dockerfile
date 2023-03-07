FROM node:16

WORKDIR /app

COPY package*.json .
COPY .sequelizerc .

RUN apt-get update
RUN apt-get install lsof
RUN npm install

# RUN npx sequelize-cli db:drop
# RUN npx sequelize-cli db:create 
# RUN npx sequelize-cli db:migrate
# RUN npx sequelize-cli db:seed:all
COPY ./entrypoint.sh .
RUN chmod 755 ./entrypoint.sh
COPY . .

ARG EnvironmentVariable
