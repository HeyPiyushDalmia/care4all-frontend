// import './App.css'
import Index from './components/index'
import Footer from './components/Footer'
import Header from './components/Header'
// import Login from './components/Adopter_login'
import About from './components/About'
import Adopter_signup from './components/Adopter_signup'
import Adopter_login from './components/Adopter_login'
import Ngo_login from './components/Ngo_login'
import './../src/assets/css/style.css'

import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Switch>
    <Route path='/' element={<Index/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path ='/Adopter_signup' element={<Adopter_signup/>}/>
    <Route path ='/Adopter_login' element={<Adopter_login/>}/>
    <Route path ='/Ngo_login' element={<Ngo_login/>}/>
    

    </Switch>
    </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
