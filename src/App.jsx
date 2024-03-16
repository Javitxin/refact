//import { useState } from 'react'
import ListUsuarios from './Usuarios.jsx'
import Calculator from './Calculator.jsx'
import Top from './Top.jsx'
import Footer from './Footer.jsx'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'




function App() {

  
  
  return (
    <>

    < Top />

    <div className='envoltura'>
      {ListUsuarios}
    </div>
    <Calculator />

      <Footer />
    </>
  )
}

export default App
