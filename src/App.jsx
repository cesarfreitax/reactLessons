import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// Componentes
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'

function App() {

    return (
        <>

            <h1>React Router Dom</h1>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/services'>Services</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
            </Routes>

        </>
    )
}

export default App