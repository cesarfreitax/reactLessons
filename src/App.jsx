import React, { useState } from 'react';
import { Nomes } from './Nomes';


export default function App() {

    const [nome, setNome] = useState(() => { return '' })
    const [nomes, setNomes] = useState( () => { return [] })

    function guardarNome(){
        setNomes(tmp => [...tmp, nome])
    }

    return (
        <>
            <h1>React Unique ID</h1>
            <hr />
            <input type="text"  onChange={e => setNome(e.target.value)} value={nome} />
            <button onClick={guardarNome}>Guardar nome</button>
            <hr />
            <Nomes nomes={nomes}/>
        </>
    )
}