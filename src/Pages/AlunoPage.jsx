import { useState } from "react";
import Header from "../componentes/Header";


export default function AlunosPage(){
    const [show,setShow] = useState('hide')



    return(
        <>
        <Header/>
        <button onClick={()=>{
            if(show=='hide'){
                setShow('show')
            }
            if(show=='show'){
                setShow('hide')
            }
           
        }}>open side</button>
        <div className={show} id="sideBar">
            sdada
            
        </div>
        

        <span id="welcomeAlunoPage">Olá, Aluno</span>

        <div id="cursosContainer">
            <div className="cursoDiv"></div>
            <div className="cursoDiv"></div>
            <div className="cursoDiv"></div>
            <div className="cursoDiv"></div>
            <div className="cursoDiv"></div>
            <div className="cursoDiv"></div>
            <div className="cursoDiv"></div>
        </div>
        </>
    )
}