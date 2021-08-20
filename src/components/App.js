import Buscador from "./Buscador";
import { useState } from "react";
import Gifs from "./Gifs";

import '../styles/index.css'

const App = () => {

    const [busqueda, setBusqueda] = useState(['']);

    return (
        <>
            <h1>Buscador de gifs</h1>
            <hr />
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda}/>

            {
                busqueda.map( (item) => {
                    return <Gifs key={item} item={item}/>
                })
            }

        </>
    );
}

export default App