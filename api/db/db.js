import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path: path.resolve('./.env')})
import { Sequelize,DataTypes } from "sequelize"

export const connection = new Sequelize (process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
host:process.env.DB_HOST,
dialect: 'mysql',
})

export const Alunos = connection.define('alunos',{
  name:{
    type:Sequelize.DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.DataTypes.STRING,
    unique:true,
    allowNull:false
  },
  password:{
    type:Sequelize.DataTypes.STRING,
    allowNull:false
  },
  cursosID:{
      type:Sequelize.DataTypes.INTEGER,
      allowNull:true
    ,
  }

})




