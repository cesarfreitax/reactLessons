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

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
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