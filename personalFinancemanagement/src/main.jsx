
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { financeStore } from './store/financeStore.js'
import { Provider } from 'react-redux'
import { Income } from './components/index.js'
import { Expense } from './components/index.js'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' index element={<Home />} />
      <Route path='/aboutUs' index element={<AboutUs />} />
      <Route path='/Dashboard' element={<Dashboard />} > 
        <Route path='income' index element={<Income/>}/>
            <Route path='expense' element={<Expense/>}/>
      </Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={financeStore}>
    <RouterProvider router={router} />
  </Provider>
)
