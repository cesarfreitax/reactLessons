import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import Error from './components/Error'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import AreaLogado from './components/AreaLogado'
import { useState } from 'react';

function App() {

    const [logado] = useState(true)

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={
                logado? 
                <AreaLogado />
                :
                <Home />
                } />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='/*' element={<Error />} />
                <Route path='/outro' element={<Navigate to='/' />}/>
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />

        </>
    )
}

export default App