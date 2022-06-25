import React, { useState } from 'react';



export default function App() {

    const [escuro, setEscuro] = useState(false)

    const tema = {
        backgroundColor: escuro? 'black' : 'white', 
        color: escuro? 'white' : 'black'
    }

    return (
        <div style={tema}>
            <h1>React - Tema Claro / Escuro</h1>
            <hr />
            <button onClick={() => setEscuro(old => !old)}>Alterar Tema</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque a labore. Necessitatibus dicta quam in harum! Fuga nisi, delectus consequuntur voluptates minus perspiciatis nesciunt tempora, pariatur, obcaecati ipsam debitis!
            Dolores, impedit? Deleniti ipsa culpa nostrum sint facilis. Quia, neque, reiciendis tempora, illo explicabo enim quaerat iste dolorem voluptates sit rerum placeat impedit! Fuga sapiente aut inventore, sit reiciendis eos.
            Numquam, velit tempora, atque assumenda, voluptatum quisquam modi maiores dolor tempore dolorem odit dolore. Accusantium perspiciatis esse dolores modi neque sunt voluptates est voluptatum assumenda numquam, pariatur tempora quasi enim.
            Aliquam hic neque aut recusandae, porro est, reiciendis veniam, facere iste aliquid adipisci sint blanditiis! Incidunt est consequuntur minus. Voluptas facere, optio ipsam perferendis necessitatibus sunt tempore culpa eum doloribus?
            Exercitationem alias vitae quisquam placeat soluta, sint quaerat, porro inventore libero voluptatibus laboriosam aut non temporibus, facere voluptate velit corrupti sequi? Atque, sapiente voluptate? Eaque ipsa sed saepe quae soluta?
            Obcaecati sit nemo saepe tenetur omnis eveniet aperiam provident eligendi quos voluptatum fugiat optio culpa debitis, et ea. Explicabo laudantium iste facilis delectus corrupti ad vero dignissimos optio numquam repellat.
            Explicabo voluptatibus, odio tempore, molestiae, iure esse aliquam laboriosam autem reiciendis deleniti numquam expedita dolorum? Veniam possimus excepturi ullam maxime nam, minima dolor, et, quasi animi amet exercitationem officia molestias.
            Delectus perspiciatis, veritatis iste totam temporibus doloribus eius suscipit unde repellendus nisi, nobis modi dolor corporis aperiam ipsam, tempora cupiditate. Quae architecto reiciendis optio deserunt consequuntur ex veritatis consectetur eum.
            Reprehenderit nulla mollitia dolorum nemo earum id, provident delectus exercitationem eaque, ducimus corrupti! Labore tempora et facere harum illum molestias facilis aspernatur quis. Aliquam nulla nihil veniam blanditiis velit qui!
            Natus aperiam distinctio consequuntur animi! Ducimus quas amet qui beatae quibusdam nisi nesciunt neque quia debitis aliquam id libero explicabo repellat eum accusamus nobis at voluptatibus, cumque cupiditate! Dolor, sint.</p>
        </div>
    )
}