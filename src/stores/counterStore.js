// See
// https://blog.fearcat.in/a?ID=00001-41d707e9-edee-498d-bce1-b35d6c24a33e
// https://codingislove.com/setup-mobx-react-context/
// https://medium.com/geekculture/testing-mobx-store-with-react-cypress-made-it-easy-abc5b1571320
import { makeObservable, observable, action, autorun } from "mobx";

class CounterStore {
  value = 0;

  increment() {
    this.value++;
  }

  constructor() {
    makeObservable(this, {
      value: observable,
      increment: action,
    });
  }
}

const counterStore = new CounterStore();

autorun(() => {
  console.log(" " + counterStore.value + " ");
});

export default counterStore;
