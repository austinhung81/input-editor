import InputEditor from './input-editor';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('initializing InputEditor', () => {
  it('should have an input', () => {
    new InputEditor(document.body);
    const input = document.querySelector('.input-editor-input');
    const result = document.body.querySelector('.input-editor')?.contains(input);
    expect(result).toBe(true);
  });

  it('should have an input with placeholder', () => {
    const placeholder = 'Enter an email';
    new InputEditor(document.body, {placeholder: placeholder});
    const input = document.querySelector('input');
    expect(input?.placeholder).toEqual(placeholder);
  });

  it('should have a valid token', () => {
    const token = 'valid@test.com';
    const inputEditor = new InputEditor(document.body);
    inputEditor.createToken(token);
    const validToken = document.querySelector('.input-editor-token.valid');
    const result = document.body.querySelector('.input-editor')?.contains(validToken);
    expect(result).toBe(true);
  });

  it('should have an invalid token', () => {
    const token = 'invalidToken';
    const inputEditor = new InputEditor(document.body);
    inputEditor.createToken(token);
    const invalidToken = document.querySelector('.input-editor-token.invalid');
    const result = document.body.querySelector('.input-editor')?.contains(invalidToken);
    expect(result).toBe(true);
  });
})

describe('test getter: getTokenList, getValidTokenList', () => {
  it('should return a token list', () => {
    const source = ['test', 'test@test.com'];
    const inputEditor = new InputEditor(document.body, {source: source});
    expect(inputEditor.getTokenList).toEqual(source);
  });
  it('should return a valid token list', () => {
    const source = ['test', 'test@test.com'];
    const inputEditor = new InputEditor(document.body, {source: source});
    expect(inputEditor.getValidTokenList).toEqual(['test@test.com']);
  });
})

describe('test createToken method', () => {
  it('should create a token', () => {
    const expectResult = ['test@test.com'];
    const inputEditor = new InputEditor(document.body);
    inputEditor.createToken('test@test.com');
    expect(inputEditor.getTokenList).toEqual(expectResult);
  });
  it('should return a token list', async () => {
    const tokens = ['test', 'test@test.com'];
    const inputEditor = new InputEditor(document.body);
    inputEditor.createToken(tokens);
    expect(inputEditor.getTokenList).toEqual(tokens);
  });
})