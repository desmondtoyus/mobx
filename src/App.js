import React, { useState } from 'react'
import { observer, inject } from 'mobx-react';

const App = inject("todoStore")(
  observer(({ todoStore }) => {
    const [name, setName] = useState('');
    console.log('name === ', todoStore.value);
    return (
      <div>
        <h3>TodoList</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
         />
         <p>  {todoStore.value} </p>
        <button  onClick={() => todoStore.increment(name)}>
          Submit
        </button>
  
      </div>
    );
  })
)

export default React.memo(App);
