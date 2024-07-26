import { json } from "sequelize"
import { Alunos } from "../db/db.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const SECRET = 'testejwt'



  //função de verificação
 export async function verifyToken(req,res,next){

    const {authorization} = req.headers

    const token = authorization.split(' ')[1]


    const {password} = jwt.verify(token,SECRET)
}
export async function Index (req,res){
    const response = await Alunos.findAll()
    res.send(response)
}


export async function Login(req,res){


    try{

       

        const response = await Alunos.findOne({
            where:{
                email:await req.body.email,
                password:await req.body.password
            }
        })
        if(response==null){
            return res.status(400).json({msg:'user nao encontrado'})
            
        }
        else {

            const acessToken = jwt.sign({userKey:response.password},SECRET)
            return res.status(200).json({userKey:acessToken})}
        
        
    } 
    catch(error){
        console.log(error)
        
        
    }
}

export async function Push(req,res){
    
    try{

        const {authorization} = req.headers
        if(!authorization){
            return res.send(401)
        }
    
        const response = await Alunos.findOne(
            {where:
                {
                    email:await req.body.email,password:await req.body.password}
            })
        if(response!==null){
            throw new Error('Erro interno')
            res.send('ja existe um conta')
        }
    
        else{
        const user_key= 'NSAODKJ'

        
        const acessToken = jwt.sign(user_key,SECRET)
        

            await Alunos.create({
            name:await req.body.name,
            email:await req.body.email,
            password:await req.body.password,
            cursosID:await req.body.cursosID,
        })
        res.status(200).json({key:acessToken})
        }
    
        }catch(error)
        {
            console.log('erro na criação')
            return res.status(500).json(error)
            throw new Error('Erro interno')
        }
       
    }



   

export async function Log(req,res){
    const wanted = await Users.findOne(
        {where:
            {
                email:await req.body.email,password:await req.body.password}
        })
     

        
        if(wanted !==null && wanted!== undefined){
            res.send([wanted,json({auth:true,token}) ])
        } else res.status(401).end()
}
