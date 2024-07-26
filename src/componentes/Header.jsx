import { Link } from "react-router-dom"

export default function Header(){
    return(
    <>
    <header>
      <span id="logoSpan">Next Academy</span>
      
      <span>UserName</span>
      <div id="logo">
        <img src="../src/imgs/ico.png" alt="" />
      </div>

      <div className="mainUser" id="userPic"></div>

        <Link className="Link linkspace" to={'/chat'}>Sua Conta</Link>
      <Link className="Link" to={'/chat'}>Sair</Link>

    </header>
    </>
    )
}