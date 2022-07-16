import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>

      <section className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-8 card text-center p-3">
            <h3>Services</h3>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </section>

    </>
  )
}

export default Services