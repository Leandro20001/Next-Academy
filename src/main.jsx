import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Chat } from '../api/Chat/Chat.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import AlunosPage from './Pages/AlunoPage.jsx'
import Login from './Pages/Login.jsx'


const router = createBrowserRouter([

  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/professor',
    element:<App/>
  },
  {
    path:'/chat',
    element:<Chat/>
  },
  {
    path:'/cursos',
    element:<AlunosPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>
 </RouterProvider>
)
