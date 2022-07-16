import React from 'react'
import {Routes, Route} from 'react-router-dom'

// Componentes
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'

function App() {

    return (
        <>
            <h1>React Router Dom</h1>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/services' element={<Services />}/>
            </Routes>
        </>
    )
}

export default App