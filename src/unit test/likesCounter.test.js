import { likesCounter } from '../modules/likes.js';

describe('likesCounter function testing', () => {
  test('count the number of likes given a test array contain 3 objects and need to retrive the number of likes for the second element ', () => {
    // arrange
    const likesTestArray = [
      {
        likes: 5,
        item_id: '1',
      },
      {
        likes: 15,
        item_id: '6',
      },
      {
        likes: 4,
        item_id: '15',
      },
    ];// initialize the test array
    // act
    const counter = likesCounter(likesTestArray, 1);
    // run the function and get the test value
    // assert
    expect(counter).toBe(15); // expected 15 actual value must return 15
  });
  test('count the number of likes given a test array of length 0 to equal 0', () => {
    // arrange
    const likesTestArray = [];// initialize the test array
    // act
    const counter = likesCounter(likesTestArray, 5);
    // run the function and get the test value
    // assert
    expect(counter).toBe(0); // expected 0 actual value must return 0
  });
  test('count the number of likes given a test array of length 3 with input index = 4 to output error index out of boundary', () => {
    // arrange
    const commentTestArray = {
      likes: 5,
      item_id: '1',
    };// initialize the test array
    // act
    // assert
    expect(() => likesCounter(commentTestArray, 2)).toThrow('index is out of array boundary!');
    // expected index is out of array boundary! error
    // actual value must return index is out of array boundary!
  });
});