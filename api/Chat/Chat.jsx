import io from 'socket.io-client'
import { useState,useEffect } from 'react'
const socket = io.connect('http://localhost:3000')
export function Chat(){
    const [wrote,setWrote] = useState(false)
    const[messages,setMessages] = useState([])
    const [message,setMessage] = useState()

    const[received,setReceived]= useState(false)
    const sendMsg = (async()=>{
        if(message!==''&&message!==null&&message!==undefined){
        setMessages({...messages,message})
        setReceived(message)
        socket.emit('send_message',{message:message})
        }s
    })

    useEffect(()=>{
        socket.on('receive_message',(message)=>{
            setReceived(message.message)
            console.log(message)
        })
    },[socket])

    console.log(message)

 
    return(
    <>
    {console.log(message)}
    <div id='messagesBox'>
        
        {received?<span>{received}</span>:null}
        
    </div>

    <div id='formMsg'>
        <input onChange={(e)=>{
            setMessage(e.target.value)
        }}  type="text" placeholder="Envie sua mensagem" />

        <button id='messageBtn' onClick={()=>{
            sendMsg()
        }}>env
            
        </button>
    </div>
    </>
    )
}