import ContactCard from "./ContactCard"
import { useState,useEffect } from "react"
import axios, { spread } from "axios"
import { useNavigate } from "react-router-dom"
export default function AlunosContainer(){
  const [has,nowHas]= useState(false)
  const [data,setData]= useState()
  const nav = useNavigate()
  const db = (async()=>{
    await axios.get('http://localhost:3333/alunos').then(res =>{
      setData(res.data)
      nowHas(true)
    })})
    
    useEffect(()=>{
      db()
      console.log(data)
    },[has])

    return(
    <div id="alunosChat">
      <div onClick={()=>{nav('/chat')}} id="classeSession" className="ContactCard">
        <span>Chat Da Classe</span>
      </div>
    {data?
    (
    <>
    {data.map((a)=>
    <ContactCard
    key={a.id}
    id={a.id}
    name={a.name}
    />
    )}
    </>
    )
    
    :null}
    </div>
    )
}