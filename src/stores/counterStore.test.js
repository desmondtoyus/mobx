import counterStore from "./counterStore";

describe("counterStore", () => {
  const store = counterStore;
  it("retuns default value", () => {
    expect(store.value).toBe(0);
  });
  it("increments state", () => {
    store.increment();
    expect(store.value).toBe(1);
  });
});
