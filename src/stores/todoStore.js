import { makeObservable, observable, action, autorun } from "mobx";

class TodoStore {
  todos = [
    {
      id: "0",
      finished: false,
      title: "Do good",
    },
    {
      id: "1",
      finished: true,
      title: "Eat",
    },
    {
      id: "2",
      finished: false,
      title: "Code",
    },
  ];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addOne: action,
      list: action,
    });
  }

  get countAll() {
    return this.todos.length;
  }

  //@action
  addOne(name) {
    const obj = {
      id: this.todos.length + 1,
      finished: false,
      title: name,
    };
    return this.todos.push(obj);
  }

  // @action
  list() {
    return JSON.parse(JSON.stringify(this.todos));
  }
}

const todoStore = new TodoStore();

autorun(() => {
  console.log(" " + todoStore.countAll + " ");
});

export default todoStore;
