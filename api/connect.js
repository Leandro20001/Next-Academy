import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Login, Push } from './controlers/controlers.js'
import { Alunos,connection } from './db/db.js'
import { verifyToken } from './controlers/controlers.js'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())


app.get('/alunos',(req,res)=>{
    Alunos.findAll().then((values)=>{res.send(values)})
})
app.post('/entrar',Login)
app.post('/login',Push)

app.listen(3333,()=>{console.log(`API rodando em http://localhost:3333`)})
