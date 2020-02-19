import { useState, useEffect } from 'react';
import axios from 'axios';

// este metodo se puede sacar en otro archivo, y puede ser reutilizado!!
const useResources = resource => {
    const [ resources, setResources ] = useState([]);
    useEffect(
        () => {
            // declaro y llamo inmediatamente una arrow function
            (async resource => {    
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
                
                setResources(response.data);
            })(resource);
        }, [resource]
    );
    
    return resources;
}

export default useResources;