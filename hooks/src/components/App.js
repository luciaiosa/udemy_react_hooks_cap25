import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

// utilizo useState en un componente funcional para poder utilizar el estado, como en un componente tipo clase!!

const App = () => {
  // array destructuring (the name is not important)
  // resource = the current value of the state
  // setResource = function to call when we want to update our state (or rerender). Like setState()
  // useState = function from React to use Hooks
  // 'posts', 0, ... are initial values of the state resource, currentCount, ...
  const [resource, setResource] = useState('posts');
  // we can have has many as we want
  // const [currentCount, setCount] = useState(0);

  return (
    <div className="ui container">
    <UserList></UserList>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {/* I'm passing to ResourceList a prop, resource */}
      <ResourceList resource={resource}/>
    </div>
  );
  
}

export default App;
