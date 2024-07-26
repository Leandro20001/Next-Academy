import { useNavigate } from "react-router-dom"

export default function ContactCard({id,name}){
    const nav = useNavigate()
    return(
        <div className="ContactCard">
            <div onClick={()=>{nav('/chat')}} id="userPic"></div>
            <span onClick={()=>{nav('/chat')}} id="userNameSpan">{name} {`N ${id}`}</span>
        </div>
    )
}