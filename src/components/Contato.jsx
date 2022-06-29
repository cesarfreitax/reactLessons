import React from 'react'


function Contato(props) {
  return (
    <li>
        {props.nome} {props.telefone}
    </li>
  )
}

export default Contato