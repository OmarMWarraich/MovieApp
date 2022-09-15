import { commentCounter } from '../modules/commentsPopUp.js';

describe('commentCounter function testing', () => {
  test('count the number of comments given a test array of length 3 to equal 3', () => {
    // arrange
    const commentTestArray = [{
      username: 'mohamed',
      creation_date: '2021-01-10',
      comment: 'This is nice!',
    },
    {
      username: 'norman',
      creation_date: '2021-01-10',
      comment: 'This is nice!',
    },
    {
      username: 'Omar',
      creation_date: '2021-01-10',
      comment: 'This is nice!',
    }];// initialize the test array
    // act
    const counter = commentCounter(commentTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(3); // expected 5 actual value must return 5
  });
  test('count the number of comments given a test array of length 0 to equal 0', () => {
    // arrange
    const commentTestArray = [];// initialize the test array
    // act
    const counter = commentCounter(commentTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(0); // expected 5 actual value must return 5
  });
  test('count the number of comments given a test array of length 1 to equal 1', () => {
    // arrange
    const commentTestArray = [{
      username: 'norman',
      creation_date: '2021-01-10',
      comment: 'This is nice!',
    }];// initialize the test array
    // act
    const counter = commentCounter(commentTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(1); // expected 5 actual value must return 5
  });
});