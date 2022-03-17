// See
// // https://blog.fearcat.in/a?ID=00001-41d707e9-edee-498d-bce1-b35d6c24a33e
// https://codingislove.com/setup-mobx-react-context/


import { makeObservable, observable, action, autorun } from "mobx"

class TodoStore {
    value = 0

    constructor(value) {
        makeObservable(this, {
            value: observable,
            increment: action
        })
    }

    increment() {
        // Intermediate states will not become visible to observers.
        this.value++
    }
}

const todoStore = new TodoStore();

autorun(() => {
  console.log(" " + todoStore.value + " "); 
});

export default todoStore;