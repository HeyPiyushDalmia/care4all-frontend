// import './App.css'
import Index from './components/index'
import Footer from './components/Footer'
import Header from './components/Header'
// import Login from './components/Adopter_login'
import About from './components/About'
import Adopter_signup from './components/Adopter_signup'
<<<<<<< HEAD
import Adopt_signup from './components/Adopt_signup'

=======
import Adopter_login from './components/Adopter_login'
import Ngo_login from './components/Ngo_login'
>>>>>>> 59aae32fe03a07c2f7a7d2e45b1c0c1dc0a4a4aa
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
<<<<<<< HEAD
    <Route path ='/adopter_signup' element={<Adopter_signup/>}/>
    <Route path ='/adopt_signup' element={<Adopt_signup/>}/>
=======
    <Route path ='/Adopter_signup' element={<Adopter_signup/>}/>
    <Route path ='/Adopter_login' element={<Adopter_login/>}/>
    <Route path ='/Ngo_login' element={<Ngo_login/>}/>
    
>>>>>>> 59aae32fe03a07c2f7a7d2e45b1c0c1dc0a4a4aa

    </Switch>
    </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
