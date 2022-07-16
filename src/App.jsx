import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import Error from './components/Error'

function App() {

    return (
        <>

            <h1>React Router Dom</h1>

            <nav className='container'>
                <div className="row">
                    <div className="col text-center">
                        <Link className='btn btn-primary m-3' to='/'>Home</Link>
                        <Link className='btn btn-primary m-3' to='/contact'>Contact</Link>
                        <Link className='btn btn-primary m-3' to='/services'>Services</Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='/*' element={<Error />} />
            </Routes>

        </>
    )
}

export default App