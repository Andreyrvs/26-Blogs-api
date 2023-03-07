# Blogs API

Este projeto trata-se de uma API e um banco de dados para a produção de conteúdo para um blog!

> Desafios:
>
>  1. Desenvolver endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;
>
>  2. Para fazer um post é necessário usuário e login, portanto será trabalhada a relação entre user e post;
>
>  3. Será necessária a utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.
>

## Técnologias usadas

Back-end:
> Desenvolvido usando: Node.js, Express.js, Docker, Sequelize, JWT

## Habilidades

Adquiri essas habilidades ao desenvolver esse projeto:

- Aderência do código à especificação. O programa deve se comportar como especificado na próxima seção.

- Organização do código.

- A qualidade e a cobertura dos testes.

<!-- ## Preview da Aplicação

| ![Login](./aplicacao-) | ![Home](./aplicacao-) |
| ----------- | ----------- | -->

## Instalando Dependências

- clone o projeto:

  ```bash
  git clone git@github.com:Andreyrvs/26-blogs-api.git
  ```

  > Back-end

  ```bash
  cd 26-blogs-api
  npm install
  ```

## Executando aplicação

- Para rodar o Banco de dados

  ```bash
  npm run drop
  # "npx sequelize-cli db:drop"
  ```

  Cria o banco e realiza as `Migration`

  ```bash
  npm run prestart
  # npx sequelize-cli db:create && npx sequelize-cli db:migrate
  ```

  Popula o banco de dados

  ```bash
  npm run d
  # npx sequelize-cli db:seed:all
  ```

- Para rodar o Back-end:

  ```bash
  cd api/ && npm start
  ```
