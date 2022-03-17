import todoStore from "./todoStore";

describe("todoStore", () => {
  const store = todoStore;
  it("retuns default value", () => {
    expect(store.countAll).toEqual(3);
  });
  it("updates store", () => {
    store.addOne("Test");
    expect(store.list()[store.countAll - 1].title).toBe("Test");
  });
});
