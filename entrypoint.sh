# entrypoint.sh

npm install
npx sequelize-cli db:create
npx sequelize-cli db:migrate