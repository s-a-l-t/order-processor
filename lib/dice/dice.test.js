const dice = require('./dice');

describe('dice', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1);
  });

  afterEach(() => {
    global.Math.random.mockRestore();
  });

  it('rolls the number of specified dice, defaulting to 6 sided dice', () => {
    const roll = dice(1);

    expect(roll).toBe(6);
  });

  it('allows a custom side count to be provided', () => {
    const roll = dice(1, 10);

    expect(roll).toBe(10);
  });

  it('rolls multiple dice with a custom side count', () => {
    const roll = dice(2, 10);

    expect(roll).toBe(20);
  });

  it('rolls a minumum of 1', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
    const roll = dice(1);

    expect(roll).toBe(1);
  });

});
