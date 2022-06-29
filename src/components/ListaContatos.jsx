import React from 'react'


function ListaContatos({listaContatos}) {
  return (
    <div>
      <ul>
        {listaContatos.map(contato => { return <li key={uuidv4()}>Nome: {contato.nome} - Tel:{contato.telefone}</li> }) }
      </ul>
    </div>
  )
}

export default ListaContatos