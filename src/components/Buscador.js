import {useState} from 'react';
import PropTypes from 'prop-types';

const Buscador = ({busqueda, setBusqueda}) => {

    const [valorInput, setValorInput] = useState(''); 

    const handleUpdate = (evento) => {
        setValorInput(evento.target.value);
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(valorInput.trim().length >= 1 ){
            setBusqueda([valorInput, ...busqueda])
            setValorInput('');
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={valorInput} onChange={handleUpdate} placeholder='Escribe una categoria'/>
            <button type="submit">Buscar</button>
        </form>
    );
}

export default Buscador;

Buscador.propTypes = {
    busqueda: PropTypes.array.isRequired,
    setBusqueda: PropTypes.func
}