
import { Outlet } from 'react-router-dom'
import './App.css'
import{ Allchart, Footer, Header }from './components/index.js'

function App() {


  return (
  <div>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </div>
  )
}

export default App
