import multiply from '../core/js/multiply';

describe('The Multiply module test suite', () => {
  it('is a public function', () => {
    expect(multiply).toBeDefined();
  });

  it('should correctly multiply two numbers', () => {
    const expected = 6;
    const actual1 = multiply(2, 3);
    const actual2 = multiply(1, 6);

    expect(actual1).toEqual(expected);
    expect(actual2).toEqual(expected);
  });

  it('should not multiply incorrectly', () => {
    const notExpected = 10;
    const actual = multiply(3, 5);

    expect(notExpected).not.toEqual(actual);
  });
});
