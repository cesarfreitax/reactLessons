import React, { useState } from 'react'
import Contato from './components/Contato';
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [contato, setContato] = useState({nome: '', telefone: ''});
    const [listaContatos, setListaContatos] = useState([]);
    
    function definirNome (e){
        setContato({...contato, nome: e.target.value})
    }

    function definirTelefone (e){
        setContato({...contato, telefone: e.target.value})
    }

    function adicionarContato (){
        // validacao dos campos



        // adicionar novo contato na lista
        setListaContatos([...listaContatos, contato])
    }

    return (
        <div>
            <h1>Minha lista de contatos</h1>
            <hr />
            <div>
                <label>Nome:</label><br />
                <input type="text" onChange={definirNome} value={contato.nome} />
            </div>
            <div>
                <label>Telefone:</label><br />
                <input type="number" onChange={definirTelefone} value={contato.telefone} />
            </div>

            <button onClick={adicionarContato}>Adicionar Contato</button>
            <hr />

            {/* <ListaContatos listaContatos={listaContatos}/> */}

            <ul>
                {listaContatos.map(ctt => {
                    return <Contato key={uuidv4()} nome={ctt.nome} telefone={ctt.telefone}/>
                })}
            </ul>


        </div>
    )
}

export default App