import React, {useState, useRef} from 'react';


export default function App() {

    // STATE
    const [listaTarefas, setListaTarefas] = useState(() => { return [] })
    const [tarefa, setTarefa] = useState(() => { return "" })

    // REF
    const idTarefa = useRef(0)
    const inputRef = useRef()

    // MÉTODOS
    function adicionarTarefa(){
        setListaTarefas(old => { return [...old, {id: idTarefa.current, texto: tarefa}] })
        idTarefa.current++
        setTarefa('')
        inputRef.current.focus()
    }

    function limparTarefas(){
        setListaTarefas(() => {return []})
        idTarefa.current = 0;
    }

    function removerTarefa(id){
        const temp = listaTarefas.filter(tarefa => tarefa.id !== id)
        setListaTarefas(temp);
    }

    return (
        <>
            <h1>GESTOR DE TAREFAS</h1>
            <hr />
            <input ref={inputRef} type="text" value={tarefa} onChange={(evento) => { setTarefa(evento.target.value) }}/>
            <div>
                <button onClick={adicionarTarefa}>Adicionar</button>
                <button onClick={limparTarefas}>Limpar tudo</button>
            </div>
            <hr />
            <p>Tarefas</p>
            {listaTarefas.map((tarefa) => {
                return <p key={tarefa.id}>{tarefa.texto} - <button onClick={() => { removerTarefa(tarefa.id) }}>Remover</button> </p> 
            })}

        </>
    )
}