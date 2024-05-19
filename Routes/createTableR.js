const CreateTableRouter = require('express').Router()
const {createTable} = require('../controllers/createTable')


CreateTableRouter.get('/createTable',createTable)

module.exports={CreateTableRouter}