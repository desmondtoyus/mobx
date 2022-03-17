import React, { useState } from "react";
import { observer, inject } from "mobx-react";

const Home = inject("store")(
  observer(({ store }) => {
    const [name, setName] = useState("");
    const { counterStore, todoStore } = store;
    console.log("counterStore === ", counterStore.value);
    console.log("todoStore == ", todoStore.list());

    return (
      <div>
        <h3>MobX Test</h3>
        <div>
          <p data-testid="to-do-count">ToDo length: {todoStore.countAll}</p>
          <input type="text" value={name} data-testid="to-do-input" onChange={(e) => setName(e.target.value)} />
          <button onClick={() => todoStore.addOne(name)} data-testid="to-do-submit">
            {" "}
            Update Todo
          </button>
        </div>
        <div>
          <span data-testid="counter">Counter: {counterStore.value} </span>
          <button onClick={() => counterStore.increment()} data-testid="counter-submit">
            Increment Counter
          </button>
        </div>
      </div>
    );
  })
);

export default React.memo(Home);
