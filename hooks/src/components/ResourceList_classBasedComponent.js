import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {

    state= {resources: []};
    // componentDidMount solo se llama una vez!!! Si algo se cambia, hay que crear componentDidUpdate para que el componente vuelva a renderizarse con los nuevos datos!! 
    componentDidMount = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        
        this.setState({ resources: response.data});
    }

    // SIEMPRE HAY QUE PONER previousProps (el nombre no importa), PARA NO HACER LLAMADAS INFINITAS A LA API!!
    // y comprobar que props haya cambiado
    componentDidUpdate = async (previousProps) => {
        if (previousProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            
            this.setState({ resources: response.data});
        }
    }

    render() {
        return (
            <div>
                <div>{this.props.resource}: {this.state.resources.length}</div>
            </div>
        )
    }
}

export default ResourceList;