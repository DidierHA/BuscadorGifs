import { useState, useEffect } from "react";
import ListaGifs from "./ListaGifs";
import { obtenerGifs } from '../helpers/obtenerGifs';

const Gifs = ({item}) => {

    const [gifs, setGifs] = useState([]);

    useEffect( () => {
        obtenerGifs(item).then((gif) => {
            setGifs(gif);
        })
    },[item])

    return (
        <>
            <h2>{item}</h2>
            <div className='gif-container'>
                {
                    gifs.map( (gif) => {
                        return <ListaGifs key={gif.imagen} gif={gif} />
                    } )
                }
            </div>
        </>
    )
}

export default Gifs
