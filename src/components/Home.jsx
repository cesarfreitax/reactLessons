import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  
  const irPara = useNavigate();
  
  return (
    <>
      <section className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-8 card text-center p-3">
            <h3>Home</h3>
          </div>
        </div>
        <div className='row justify-content-center'>
          <button onClick={() => {
            irPara('/services')
          }}>Services</button>
        </div>
      </section>
    </>
  )
}

export default Home