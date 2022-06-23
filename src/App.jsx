import React, {useState, useRef } from 'react';


export default function App() {

    const [valor, setValor] = useState('teste')
    const input = useRef()
    const [valorInput, setValorInput] = useState('')

    function alterar_valor(){
        setValor("César")
    }





    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            <input type="text" ref={input} onChange={e => (setValorInput(e.target.value))} />
            <p>Valor: {valorInput}</p>
            <button onClick={alterar_valor}>Alterar valor</button>
        </>
    )
}