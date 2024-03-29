require('dotenv').config();
const app = require('./api');

// não remova a variável `PORT` ou o `listen`
const port = process.env.PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('API rodando na porta:', port));
