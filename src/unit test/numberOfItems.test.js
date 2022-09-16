import numberOfItems from '../modules/numberOfItems.js';

describe('numberOfItems function testing', () => {
  test('count the number of items given a test array conatain 3 objects to  test its length to equal 3', () => {
    // arrange
    const numberOfItemsTestArray = [{
    },
    {
    },
    {
    }];// initialize the test array
      // act
    const counter = numberOfItems(numberOfItemsTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(3); // expected 3 actual value must return 3
  });
  test('count the number of items given a test array conatain 0 objects to  test its length to equal 0', () => {
    // arrange
    const numberOfItemsTestArray = [];// initialize the test array
    // act
    const counter = numberOfItems(numberOfItemsTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(0); // expected 3 actual value must return 3
  });
  test('count the number of items given a test array conatain 1 objects to  test its length to equal 1', () => {
    // arrange
    const numberOfItemsTestArray = [{
    }];// initialize the test array
      // act
    const counter = numberOfItems(numberOfItemsTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(1); // expected 3 actual value must return 3
  });
});