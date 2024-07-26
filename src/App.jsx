
import { useEffect, useState } from "react"
import axios from 'axios'
import AlunosContainer from "./Components/AlunosContainer"
import { NotasModal } from "./Components/NotasModal"
import { ChamadaModal } from "./Components/AulasModal"
import Header from "./componentes/Header"
export default function App(){
  const [has,nowHas]= useState(false)
  const [data,setData]= useState()
  const db = (async()=>{
    await axios.get('http://localhost:3333/alunos').then(res =>{
      setData(res.data)
      nowHas(true)
    })})

  const [openChamada,setOpenChamada]= useState(false)
  const [openNotas,setOpenNotas]= useState(false)
    



    useEffect(()=>{
      db()
    },[has])
  return(
   <>
    <ChamadaModal open={openChamada}/>
    <NotasModal open={openNotas}/>
   <Header/>

    <div id="options">
      <h1>Gerencie Sua Classe</h1>
      <div id="managerBtn">
        <button
        onClick={()=>{
          setOpenChamada(true)
        }}
         id="chamadaBtn">Suas Aulas</button>


        <button 
        onClick={()=>{
          setOpenNotas(true)
        }} id="NotasBtn">Atividade Dos Alunos</button>
      </div>

    </div>
     <AlunosContainer/>
    </>
  )
}