import getItems from '../src/modules/__mocks__/loadApi.js';

describe('Add tests for Items counter', () => {
  it("Search with Search Query 'q' - Output: 10", async () => {
    const itemsCount = await getItems('q'); // Run the function
    expect(itemsCount.length).toEqual(10); // Make an assertion on the result
  });

  it("Search with Search Query 'p'- Output: Undefined", async () => {
    const itemsCount = await getItems('p'); // Run the function
    expect(itemsCount.length).toEqual(6); // Make an assertion on the result
  });

  it("Search with Search Query 'NOt Such Word' - Output: 0", async () => {
    const itemsCount = await getItems('NOt Such Word'); // Run the function
    expect(itemsCount.length).toEqual(0); // Make an assertion on the result
  });
});
