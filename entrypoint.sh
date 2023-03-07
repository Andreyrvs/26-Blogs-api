#!/bin/sh
echo "Starting get ready!!!"

sequelize migrate-db
sequelize-cli db:create 
sequelize-cli db:migrate
sequelize-cli db:seed:all