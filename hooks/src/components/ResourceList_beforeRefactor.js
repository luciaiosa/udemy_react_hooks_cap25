import React, { useState, useEffect } from 'react';
// voy a usar useState para el estado, y useEffect para usar "lifecycle methods"
import axios from 'axios';

const ResourceList = ({resource}) => {

    // con esto, inicializamos el estado [], tenemos acceso a ese estado inicial (resources), y podemos cambiar es estado (setResources)
    const [ resources, setResources ] = useState([]);

    

    const fetchResource = async (resource) => {
        // this.props ya no funciona con un componente funcional, solo con uno class based!!
        // ya no hay setState!!
/*         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        
        this.setState({ resources: response.data}); */

        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        
        setResources(response.data);
    }

    // se le pasan dos argumentos, una función y un array con el primer valor el prop que se le pasa ('posts' or 'todos')
    // cada vez que el componente se renderiza, o se modifica, se llama este método!!
    // EL SEGUNDO ARGUMENTO (EL ARRAY CON EL VALOR DEL PROP QUE LE LLEGA) ES MUY IMPORTANTE, HACE QUE NO SE HAGAN LLAMADAS A LA API SI EL ESTADO NO HA CAMBIADO!!
    // SI NO SE PONE EL SEGUNDO ARGUMENTO, EL METODO useEffect SE VA A LLAMAR SIEMPRE!!
    // SI SE PONE EL SEGUNDO ARGUMENTO UN [], EL METODO useEffect SE VA A LLAMAR SOLO LA PRIMERA VEZ, CUANDO SE RENDERIZA EL COMPONENTE, NO CUANDO SE MODIFICA!!
    // SI SE PONE EL SEGUNDO ARGUMENTO UN ARRAY CON EL MISMO VALOR QUE EL PRIMERO, EL METODO useEffect SE VA A LLAMAR SOLO LA PRIMERA VEZ, CUANDO SE RENDERIZA EL COMPONENTE, NO CUANDO SE MODIFICA!!
    // SI SE PONE EL SEGUNDO ARGUMENTO UN [] CON UN VALOR DIFERENTE AL PRIMERO, EL METODO useEffect SE VA A LLAMAR CUANDO SE RENDERIZA EL COMPONENTE Y CUANDO SE MODIFICA!!
    useEffect(() => {
        // SI NECESITAMOS HACER ALGO ASINCRONO, HAY QUE CREAR OTRO MÉTODO, Y LLAMARLO AQUI. Sino, podemos poner el codigo directamente en este metodo
        fetchResource(resource);
    }, [resource])

    return (
        <ul>
            {/* <div>{this.props.resource}: {resources.length}</div> */}
            {/* <div>{resource}: {resources.length}</div> */}
            {resources.map(record => <li key={record.id}>{record.title}</li>)}
        </ul>
    )
}

export default ResourceList;

// Para declarar y llamar inmediatamente una función:
// (() => console.log('hi'))();