import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { gitdatainfo } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root/>}>
      <Route path='' element={ <Home/>} />
      <Route path='about' element={ <About/>} />
      <Route path='contact' element={ <Contact/>} />
      <Route path='user/:id' element={ <User />} />
      <Route loader={gitdatainfo} path='github' element={<Github />} />
    </Route>
  ),
  {
    basename: "/React_Router_DOM", // Set basename to match your GitHub Pages subdirectory
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
