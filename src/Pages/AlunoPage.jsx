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
        <div  id="sideBar" className={show}>
        <button onClick={()=>{
            if(show=='hide'){
                setShow('show')
            }
            if(show=='show'){
                setShow('hide')
            }
           
        }}>open side</button>
            
        </div>
        

        <span id="welcomeAlunoPage">Olá, Aluno</span>

        <div className="moveCard" id="cursosContainer">
            <div  className="cursoDiv moveCard"></div>
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