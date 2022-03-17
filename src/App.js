import React, { useState } from "react";
import { observer, inject } from "mobx-react";

const App = inject("store")(
  observer(({ store }) => {
    const [name, setName] = useState("");
    const { counterStore, todoStore } = store;
    console.log("counterStore === ", counterStore.value);
    console.log("todoStore == ", todoStore.list());

    return (
      <div>
        <h3>MobX</h3>
        <div>
          <p>ToDo length: {todoStore.countAll}</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={() => todoStore.addOne(name)}> Update Todo</button>
        </div>
        <div>
          <span>Counter: {counterStore.value} </span>
          <button onClick={() => counterStore.increment()}>Increment Counter</button>
        </div>
      </div>
    );
  })
);

export default React.memo(App);
