import React, { useState } from 'react';



export default function App() {

    const [num, setNum] = useState()

    const tabuada = () => {
        let resultado = []
        if(isNaN(num)){
            return resultado;
        } else {
            for(let m = 1; m <= 10; m++){
                resultado.push(num*m)
            }
            return resultado;
        }
    }

    return (
        <>
            <h1>React - Tabuada</h1>
            <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
            <hr />
            {tabuada().map(num => <p>{num}</p>)}
        </>
    )
}