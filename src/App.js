// import './App.css'
import Index from './components/index'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import About from './components/About'
import Adopter_signup from './components/Adopter_signup'
import Adopt_signup from './components/Adopt_signup'

import './../src/assets/css/style.css'

import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Switch>
    <Route path='/' element={<Index/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path ='/adopter_signup' element={<Adopter_signup/>}/>
    <Route path ='/adopt_signup' element={<Adopt_signup/>}/>

    </Switch>
    </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
