import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>

      <section className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-8 card text-center p-3 bg-info text-white">
            <h4>Autor:</h4>
            <h3>César Freitas</h3>
          </div>
          <div className="col-12 mt-4 text-center">
            <Link to='/'>Home</Link>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact