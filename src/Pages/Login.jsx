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
    <h2 className="" id="secondH">Melhor Escola Tecnica Do País</h2>

    <div className="" id="banner">
        <img src="../src/imgs/banner2.webp" alt=""/>

    </div>

    <div id="formDiv">
    <span id="welcome">Bem Vindo!</span>
    <div id="formBlock">
            <button className="returnBtn hide"></button>

            <div className={hide1} id="screen1">
                <span id="functionQuestion">Você é:</span>
                <div id="functionOptions">
                    <button
                    onClick={()=>{
                        setHide2('')
                        setHide1('hide')
                    }} className="function">Aluno</button>

                    <button
                    onClick={()=>{
                        setHide2('')
                        setHide1('hide')
                    }}
                     className="function">Professor</button>

                    <button
                    onClick={()=>{
                        setHide2('')
                        setHide1('hide')
                    }} className="function">Gestor</button>
                </div>
            </div>

            <div className={hide2} id="screen2">
                <span className="formSpan">Preencha Seus Dados</span>
                <form>
                    <input 
                    onChange={(e)=>{
                        setForm({...form,email:e.target.value})
                    }}
                    type="text" placeholder="E-mail da sua escola"/>


                    <input 
                    onChange={(e)=>{
                        setForm({...form,password:e.target.value})
                    }}
                    type="text" placeholder="Sua Senha"/>
                    <button className="sendBtn">Enviar</button>
                </form>
                
            </div>

        </div>
        
    </div>
    </>
    )
}