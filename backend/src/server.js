const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database')

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3001)

module.exports = app;
//para criar uma migration o comando é: npx sequelize migration:create --name=create-user
//migration são usadas para guardar as versões dos bancos de dados
//para rodar as migrations o comando é: npx sequelize db:migrate
//para fazer o down da migrate usar o comando:
/*yarn sequelize db:migrate:undo:all --to 20200417025105-create-Users.js*/
/*yarn sequelize db:migrate:undo:all --to 20200417025217-create-Ministries.js*/
/*yarn sequelize db:migrate:undo:all --to 20200423000826-create-Events.js*/