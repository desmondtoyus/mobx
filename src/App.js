import React, { useState } from 'react'
import { observer, inject } from 'mobx-react';
import {observer as observerLite, Observer, useObserver} from "mobx-react-lite";

import { useStore } from "./store";
  
// const App = inject( "todoStore")(({ todoStore }) => {

//   const [name, setName] = useState();

//   console.log('name === ', todoStore.value);
//   return (
//     <div>
//       <h3>TodoList</h3>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//        />
//        {<Observer>{() => <p>  {todoStore.value} </p>}</Observer> }
//       <button  onClick={() => todoStore.increment(name)}>
//         Submit
//       </button>

//     </div>
//   );
// });

const App = inject("todoStore")(
  observer(({ todoStore }) => {
    const [name, setName] = useState();
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

// const App = observer(() => {
//   const [name, setName] = useState();
//   const store = useStore();
//   console.log('store === ', store.user);
//   return (
//   <div>
//     <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//        />
//        <p> {store.user.length} </p>
//       <button  onClick={() => store.updateUser(name)}>
//         Submit
//       </button>
//   </div>
//     );
// });

// const App = observer(
//   (todoStore) => {
//     console.log('todoStore ==== ', todoStore);
//     return (
//       <div>
//         <input
//         id={todoStore.title}
//         type="checkbox"
//         checked={todoStore.finished}
//         onChange={() => change(todoStore.todo)}
//        />
//         <label for={todo.title}>{todo.title}</label>
//       </div>
//     );
//   }
// );

export default App;
