import './App.css'
import { Routes, Route } from 'react-router-dom'
import Work from './pages/Work'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Client from './pages/client/Client'
import Clients from './pages/Clients'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/work' element={<Work />}/>
        <Route path='/work/clients/:client' element={<Clients/>} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
  )
}

export default App
