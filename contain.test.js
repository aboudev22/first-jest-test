tab1 = [];
tab2 = [];

describe("checking the contains of the array tab1", () => {
  test("tab is empty", () => {
    expect(tab1).toHaveLength(0);
  });
});

describe("checking the contains of the array tab2", () => {
  beforeEach(() => {
    tab2.push(1, 2, 3, 4);
  });

  test("tab is empty", () => {
    expect(tab2).toHaveLength(4);
  });
});
