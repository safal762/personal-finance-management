import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Dashboard from './pages/Dashboard.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<App/>}>
      <Route path='/home' index element={<Home/>}/>
      <Route path='/aboutUs' index element={<AboutUs/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
