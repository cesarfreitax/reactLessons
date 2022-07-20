import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col text-center">
                        <h3>React Router Dom</h3>
                    </div>
                </div>
            </div>

            <nav className='container mt-3'>
                <div className="row">
                    <div className="col text-center">
                        <Link className='btn btn-primary m-3' to='/'>Home</Link>
                        <Link className='btn btn-primary m-3' to='/contact'>Contact</Link>
                        <Link className='btn btn-primary m-3' to='/services'>Services</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;