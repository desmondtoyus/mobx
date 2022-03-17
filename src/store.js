// ///store/todoStore.js
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
  console.log(" " + todoStore.value + " ");//sy-log
});

export default todoStore;

// import {observable, configure, action, computed, autorun} from "mobx";

// // enforceActions   observed 
// configure({enforceActions: "observed"});

// class TodoStore {
//  //  @observable   todos  
//  observable todos = [
//     {
//       id: "0",
//      // 
//       finished: false,
//      // 
//       title: " 1"
//     },
//     {
//       id: "1",
//      // 
//       finished: true,
//      // 
//       title: " 2"
//     },
//     {
//       id: "2",
//      // 
//       finished: false,
//      // 
//       title: " 3"
//     }
//   ];

//   get countAll() {
//     return this.todos.length;
//   }

// //@action  
//  addOne(name){
//   console.log('=== I was Clicked === ')
//     const obj = {
//       id: this.todos.length + 1,
//       finished: false,
//       name: name
//     }
//     console.log('Obj === ', obj);
//     return this.todos.push(obj);
//   }

//   // @action 
//   change(todo) {
//     console.log('=== I was Clicked === ')
//     todo.finished = !todo.finished;
//   }
// }

// const todoStore = new TodoStore();

// autorun(() => {
//   console.log(" " + todoStore.countAll + " ");//sy-log
// });

// export default todoStore;





// import React from "react";
// import { action, observable } from "mobx";
 
// /* Store start */
// export default class Store {
//   title = "Coding is Love";
 
//   user = [{
//     userId: 1,
//     name: "Ranjith kumar V",
//     website: "https://codingislove.com",
//     email: "ranjith@codingislove.com",
//   }]
 
//   // @action
//   setUser(user) {
//     this.user = user;
//   }
 
//   // @action
//   updateUser(data) {
//     const obj = {
//       userId: this.user.length + 1,
//       name: "Desmond",
//       website: "https://codingislove.com",
//       email: "ranjith@codingislove.com",
//     }

//     console.log('data == ', obj)
//     this.user.push(obj);
//   }
 
//   // @action
//   clearUser() {
//     this.user = undefined;
//   }
 
//   // @action
//   setTitle(title) {
//     this.title = title;
//   }
// }
// /* Store end */
 
// /* Store helpers */
// const StoreContext = React.createContext();
 
// export const StoreProvider = ({ children, store }) => {
//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   );
// };
 
// /* Hook to use store in any functional component */
// export const useStore = () => React.useContext(StoreContext);
 
// /* HOC to inject store to any functional or class component */
// export const withStore = (Component) => (props) => {
//   return <Component {...props} store={useStore()} />;
// };