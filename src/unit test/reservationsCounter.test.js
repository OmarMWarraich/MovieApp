import { reservationCounter } from '../modules/reservationsPopUp.js';

describe('reservationCounter function testing', () => {
  test('count the number of reservation given a test array of length 3 to equal 3', () => {
    // arrange
    const reservationTestArray = [{
      item_id: 3,
      username: 'mohamed',
      date_start: '2022-09-15 ',
      date_end: '2022-09-24',
    },
    {
      item_id: 3,
      username: 'marwa saleh',
      date_start: '2022-10-15 ',
      date_end: '2022-10-27',
    },
    {
      item_id: 3,
      username: 'norman',
      date_start: '2022-11-02 ',
      date_end: '2022-12-37',
    }];// initialize the test array
    // act
    const counter = reservationCounter(reservationTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(3); // expected 5 actual value must return 5
  });
  test('count the number of reservation given a test array of length 0 to equal 0', () => {
    // arrange
    const reservationTestArray = [];// initialize the test array
    // act
    const counter = reservationCounter(reservationTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(0); // expected 5 actual value must return 5
  });
  test('count the number of reservation given a test array of length 1 to equal 1', () => {
    // arrange
    const reservationTestArray = [{
      item_id: 3,
      username: 'mohamed',
      date_start: '2022-09-15 ',
      date_end: '2022-09-24',
    }];// initialize the test array
    // act
    const counter = reservationCounter(reservationTestArray);
    // run the function and get the test value
    // assert
    expect(counter).toBe(1); // expected 5 actual value must return 5
  });
});