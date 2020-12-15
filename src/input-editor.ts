import validateType from './utils/type-validation';
import textFit from './utils/text-fit';
import './input-editor.less';

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'input-editor';

const VALID = 'valid';
const INVALID = 'invalid';

const INPUTTYPE = 'email';
const PLACEHOLDER = 'Enter value...';

interface InputEditorProps {
  source?: string[],
  inputType?: string,
  placeholder?: string,
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class InputEditor {
  _input: HTMLInputElement;
  _inputType: string;
  _container: HTMLElement;
  _tokens: string[];
  _tokenElements: HTMLElement[];

  constructor(element: HTMLElement, config: InputEditorProps = {}) {
    const {
      source = [],
      inputType = INPUTTYPE,
      placeholder = PLACEHOLDER,
    } = config;
    this._inputType = inputType;
    this._tokens = [];
    this._tokenElements = [];

    this._input = document.createElement('input');
    this._input.className = `${NAME}-input`;
    this._input.placeholder = placeholder;
    this._input.addEventListener('input', this._handleInput);
    this._input.addEventListener('keydown', this._handleKeyDown);
    this._input.addEventListener('blur', this._handleBlur);
    this._input.style.minWidth = `${textFit(placeholder)}px`;

    this._container = document.createElement('div');
    this._container.className = `${NAME}`;
    this._container.appendChild(this._input);
    this._container.addEventListener('click', this._handleInputFocus);

    !!source.length && this._checkIsToken(source);

    element.appendChild(this._container);
  }

  // Getters

  get getTokenList() {
    return this._tokens;
  };

  get getValidTokenList() {
    return this._tokens.filter(token => validateType(this._inputType, token));
  };

  // Public

  createToken = (tokens: string[] | string): void => {
    this._checkIsToken(tokens);
  };

  // Private

  _createTokenElement = (token: string): HTMLElement => {
    const isValid: boolean = validateType(this._inputType, token);
    const className: string = `${NAME}-token ${isValid ? VALID : INVALID}`;
    const tokenElement: HTMLElement = document.createElement('span');
    tokenElement.className = className;
    tokenElement.innerText = token;
    const removeBtn: HTMLElement = this._createRemoveButton(tokenElement);
    tokenElement.appendChild(removeBtn);

    return tokenElement;
  };

  _createRemoveButton = (elm: HTMLElement): HTMLElement => {
    const svg: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const removeBtn: HTMLElement = document.createElement('span');
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.setAttribute('fill', 'none')
    svg.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L4.2218 5.63602L5.63602 4.2218L12 10.5858L18.3639 4.2218L19.7782 5.63602L13.4142 12L19.7782 18.3639L18.3639 19.7782L12 13.4142L5.63602 19.7782L4.2218 18.3639L10.5858 12Z" />`;
    removeBtn.className = `${NAME}-token-btn-remove`;
    removeBtn.addEventListener('click', () => {
      const index = this._tokenElements.indexOf(elm);
      this._removeToken(index);
    });
    removeBtn.append(svg);
    return removeBtn;
  }

  _setTokens = (tokens: string[]): void | undefined => {
    tokens.map((token: string): void => {
      const tokenElement: HTMLElement = this._createTokenElement(token);
      this._container.insertBefore(tokenElement, this._input);
      this._tokens.push(token);
      this._tokenElements.push(tokenElement);
    });
    this._input.value = '';
  };

  _checkIsToken = (tokens: string[] | string): void | undefined => {
    if (typeof tokens === 'string' && !!tokens) {
      const validTokens: string[] = tokens.replace(/(,\s*$)|(^,*)|(\s)/g, '').split(/[\s,]/g).filter(token => token);
      !!validTokens.length && this._setTokens(validTokens);
    }
    if (Array.isArray(tokens) && !!tokens.length) {
      const validTokens: string[] = tokens.map((token: string): string => {
        return token.replace(/(,\s*$)|(^,*)|(\s)/g, '');
      });
      !!validTokens.length && this._setTokens(validTokens);
    }
    return;
  }

  _removeToken = (tokenIdx: number): void => {
    const tokenElement: Node = this._container.children[tokenIdx];
    if (tokenElement) {
      this._container.removeChild(tokenElement);
      this._tokens.splice(tokenIdx, 1);
      this._tokenElements.splice(tokenIdx, 1);
    }
  };

  _handleInputFocus = (): void => {
    this._input.focus();
  };

  _handleKeyDown = (event: KeyboardEvent): void => {
    const { key } = event;
    if (key === 'Enter') {
      this._checkIsToken(this._input.value);
    }
    if (key === 'Backspace') {
      this._input.selectionEnd === 0 && this._removeToken(this._tokens.length - 1);
    }
  };

  _handleInput = (): void => {
    const hasComma: boolean = /[\s,]/.test(this._input.value);
    hasComma && this._checkIsToken(this._input.value);
  };

  _handleBlur = (): void => {
    this._checkIsToken(this._input.value);
  };
}

export default InputEditor;