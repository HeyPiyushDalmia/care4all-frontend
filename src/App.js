// import './App.css'
import Index from './components/index'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Adopt_signup from './components/Adopt_signup'
import Ngo_signup from './components/Ngo_signup'
import Adopter_login from './components/Adopter_login'
import Ngo_login from './components/Ngo_login'
import Dashboard from './components/dashboard'
import Adopt from './components/adopt'
import Elearning from './components/elearning'
import Contact from './components/Contact'

import Ngo_profile from './components/Ngo_profile'
import Ngo_menu from './components/Ngo_menu'
import Adopter_menu from './components/Adopter_menu'
import Ngo_account from './components/Ngo_account'

import Adoptionform from './components/Adoptionform'
import Adopter_dashboard from './components/Adopter_dashboard'
import Add_pet from './components/Add_pet'

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
    <Route path ='/adopt_signup' element={<Adopt_signup/>}/>
    <Route path ='/Ngo_signup' element={<Ngo_signup/>}/>
    <Route path ='/Adopter_login' element={<Adopter_login/>}/>
    <Route path ='/Ngo_login' element={<Ngo_login/>}/>
    <Route path = '/dashboard' element={<Dashboard/>}/>
    <Route path = "/adopt" element={<Adopt/>}/>
    <Route path = "/elearning" element={<Elearning/>}/>

    <Route path="/Ngo_profile" element={<Ngo_profile/>}/>
    <Route path = "/contact" element={<Contact/>}/>
    <Route path = "/menu" element={<Ngo_menu/>}/>
    <Route path="/adopt_menu" element={<Adopter_menu/>}/>
    <Route path="Ngo_account" element={<Ngo_account/>}/>

    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/Adoptionform" element={<Adoptionform/>}/>
    <Route path ="/Adopter_dashboard" element={<Adopter_dashboard/>}/>
    <Route path="/Add_pet" element={<Add_pet/>}/>
    </Switch>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
