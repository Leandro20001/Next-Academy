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
    <div id="firstLogView">
    <h1 className="logoSpan" id="firstH">Next Academy <div id="logoIco"><img src="../src/imgs/ico.png" alt="" /></div></h1>
    <h2 className="" id="secondH">Melhor Escola De TI Do País</h2>

    <div id="adDiv">
        <div id="adAlunoImg"><img src="../src/imgs/aluno.JPG" alt="" /></div>
      <p>Melhor Dinheiro Investido Da Minha Vida!</p>
      <small>Lucas Vieira</small>
    </div>








    <div id="bannerLog">
        <img src="../src/imgs/banner_home.png" alt="" />
    </div>

    <div aria-hidden="true" className="moveCard" id="carrosselDiv">
       
            <div className="cursoCard">
                <img src="../src/imgs/react.jpg" alt="" />

                <span>Programação</span>

            </div>

            <div className="cursoCard">
            <img src="../src/imgs/datascience.jfif" alt="" />
            <span>Analise De Dados</span>

            </div>

            <div className="cursoCard">
            <img src="../src/imgs/desing.jfif" alt="" />
            <span>Desingn</span>
            </div>

            <div className="cursoCard">
            <img src="../src/imgs/marketng.jfif" alt="" />
            <span>Marketing</span>
            </div>



            <div className="cursoCard">
                <img src="../src/imgs/enfermagem.jfif" alt="" />
                <span>Enfermagem</span>
            </div>
            <div className="cursoCard">
                <img src="../src/imgs/adm.png" alt="" />
                <span>Administração</span>
            </div>

    </div>
    </div>

    <div id="secondLogView">
        <h3>Planos Disponiveis</h3>

        <div id="planosDiv">
            <div className="planoCard">
                <span className="planoName">Plano Base</span>
                <x>12x</x><span className="price">R$220,00</span>
                <ul id="planoBeneficios">
                <li className="beneficio">KASDNKSDAS</li>
                <li className="beneficios">SASASNDSAD</li>
                <li className="beneficio">SADSADAD</li>
                <li className="beneficio">SDADADSA</li>
            </ul>
                <button className="planoButton">Adquirir</button>
            </div>

            <div className="planoCard">
            <span className="planoName">Plano Name</span>
            <span className="price">R$100,00</span>
            <ul id="planoBeneficios">
                <li className="beneficio">KASDNKSDAS</li>
                <li className="beneficios">SASASNDSAD</li>
                <li className="beneficio">SADSADAD</li>
                <li className="beneficio">SDADADSA</li>
            </ul>




            <button className="planoButton">Adquirir</button>
            </div>

            <div className="planoCard">
            <span className="planoName">Plano Name</span>
            <span className="price">R$100,00</span>
            <ul id="planoBeneficios">
                <li className="beneficio">KASDNKSDAS</li>
                <li className="beneficios">SASASNDSAD</li>
                <li className="beneficio">SADSADAD</li>
                <li className="beneficio">SDADADSA</li>
            </ul>
            <button className="planoButton">Adquirir</button>
                
            </div>
        </div>

    </div>


    
    </>
    )
}