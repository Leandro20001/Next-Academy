import { useState } from "react"
import axios from "axios"
import Form from "../componentes/Form"

export default function Login(){

    const [loged,setLoged] = useState({
        email:'',
        password:'',
        keyword:''
    })





    const log = async()=>{
        await axios.post('http://localhost:3333/novo%20funcionario',loged,{headers:{'Content-Type':'application/json','method':'post'}}).then(console.log('req'))
      }



const [form,setForm] = useState({
    email:'',
    password:''
})
console.log(form)
    const [hide1,setHide1] = useState()
    const [hide2,setHide2] = useState()
    return(
    <>
    <h1 className="logoSpan" id="firstH">Next Academy</h1>
    <h2 className="" id="secondH">Melhor Escola De TI Do País</h2>

    <div aria-hidden="true" className="moveCard" id="carrosselDiv">
       
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>
            <div className="cursoCard"></div>

    </div>

    
    </>
    )
}