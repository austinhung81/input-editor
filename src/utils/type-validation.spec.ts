import validateType from './type-validation';

describe('test type validation function', () => {
  it('should return true of a valid email', () => {
    const validEmail = validateType('email', 'test@test.com');
    expect(validEmail).toBe(true);
  });
  it('should return false of an invalid email', () => {
    const invalidEmail = validateType('email', 'test@test');
    expect(invalidEmail).toBe(false);
  })
})