import React, { useState, useRef, useEffect } from 'react'
import { v4 as key } from 'uuid';

function App() {

    // states
    const [contato, setContato] = useState({ nome: '', telefone: '' });
    const [listaContatos, setListaContatos] = useState([]);

    // useRef
    const inputNome = useRef()
    const inputTelefone = useRef()

    // funcoes
    const definirNome = (e) => {
        setContato({ ...contato, nome: e.target.value });
    };

    const definirTelefone = (e) => {
        setContato({ ...contato, telefone: e.target.value });
    };

    const adicionarContato = () => {
        // validacao para o campo n ser em branco
        if (contato.nome === '' || contato.telefone === '') {
            console.log("Preencha os campos corretamente!");
            return;
        }

        // verificar se o contato existe na lissta
        let duplicado = listaContatos.find((ctt) => ctt.nome === contato.nome && ctt.telefone === contato.telefone)
        if (typeof duplicado !== 'undefined') {
            console.log("Este telefone já existe na lista!")
            inputTelefone.current.focus()
            return;
        }

        // adicionar contato
        setListaContatos([...listaContatos, contato])

        // limpar o input
        setContato({ nome: '', telefone: '' })

        // colocar focus no input
        inputNome.current.focus()
    }

    const atalhoAdicionarContato = (e) => {
        if(e.code === 'Enter'){
            adicionarContato()
        }
    }

    // persistencia do state
    // carregar lista de contatos no localStorage
    useEffect(() => {
        if(localStorage.getItem('meus_contatos') !== null){
            setListaContatos(JSON.parse(localStorage.getItem('meus_contatos')))
        }
    }, [])
    
    // atualizar lista de contatos no localStorage
    useEffect(() => {
        localStorage.setItem('meus_contatos', JSON.stringify(listaContatos))
    }, [listaContatos])



    return (
        <>
            <h1>Exercício - Lista de contatos</h1>
            <hr />
            <br />
            <label>Nome:</label>
            <input type="text" onChange={definirNome} ref={inputNome} value={contato.nome} />
            <br />
            <br />
            <label>Telefone:</label>
            <input type="number" onChange={definirTelefone} ref={inputTelefone} onKeyUp={atalhoAdicionarContato} value={contato.telefone} />
            <br />
            <br />
            <button onClick={adicionarContato}>Adicionar contato</button>
            <br />
            <hr />
            <br />
            {listaContatos.map(contato => {
                return <li key={key()}>Nome: {contato.nome} - Telefone: {contato.telefone}</li>
            })}
        </>
    )
}

export default App