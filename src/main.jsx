import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { User } from './components/User.jsx';
import { Github } from './components/Github.jsx';

const router = createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/user/:id",
        element:<User/>
      },
      {
        path:"github",
        loader:async () => {return (await fetch(`https://api.github.com/users/iAnkitPal`)).json()},
        element:<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
