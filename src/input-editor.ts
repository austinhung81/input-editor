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
const INVALID = 'invalid'

interface InputEditorProps {
  inputType?: string,
  placeholder?: string,
  source?: string[],
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
      inputType = 'email',
      placeholder = 'Enter value...',
    } = config;
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
    this._container.addEventListener("click", this._handleContainerClick);
    
    this._inputType = inputType;
    this._tokens = [];
    this._tokenElements = [];

    this._setTokens(source);

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

  createToken = (tokens: string[] | string) => {
    this._setTokens(tokens);
  };

  // Private

  _createTokenElement = (token: string): HTMLElement => {
    const isValid = validateType(this._inputType, token);
    const className = `${NAME}-token ${isValid ? VALID : INVALID}`;
    const tokenElement = document.createElement('span');
    tokenElement.className = className;
    tokenElement.innerText = token;
    const removeBtn = this._createRemoveButton(tokenElement);
    tokenElement.appendChild(removeBtn);

    return tokenElement;
  };

  _createRemoveButton = (elm: HTMLElement): HTMLElement => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const removeBtn = document.createElement('span');
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.setAttribute('fill', 'none')
    svg.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L4.2218 5.63602L5.63602 4.2218L12 10.5858L18.3639 4.2218L19.7782 5.63602L13.4142 12L19.7782 18.3639L18.3639 19.7782L12 13.4142L5.63602 19.7782L4.2218 18.3639L10.5858 12Z" />`;
    removeBtn.className = `${NAME}-token-btn-remove`;
    removeBtn.addEventListener('click', () => {
      const index = this._tokenElements.indexOf(elm);
      this._removeTokenByIndex(index);
    });
    removeBtn.append(svg);
    return removeBtn;
  }

  _setTokens = (tokens: string[] | string) => {
    const tokenList: string[] = Array.isArray(tokens) ? tokens : [tokens];
    if (!tokens || !tokenList.length) {
      return;
    }
    tokenList.map((token: string): void => {
      const tokenElement = this._createTokenElement(token);
      this._container.insertBefore(tokenElement, this._input);
      this._tokens.push(token);
      this._tokenElements.push(tokenElement);
    });
    this._input.value = '';
  };

  _handleTokensAdded = () => {
    const tokens = this._input.value.replace(/(,\s*$)|(^,*)|(\s)/g, '').split(/[\s,]/g).filter(token => token);
    tokens.length && this._setTokens(tokens);
  };

  _removeTokenByIndex = (index: number) => {
    const tokenElement = this._container.children[index];
    this._container.removeChild(tokenElement);

    this._tokens.splice(index, 1);
    this._tokenElements.splice(index, 1);
  };

  _handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === 'Enter') {
      this._handleTokensAdded();
    }
    if (key === 'Backspace') {
      this._input.selectionEnd === 0 && this._removeTokenByIndex(this._tokens.length - 1);
    }
  };

  _handleInput = () => {
    const hasSeparator = /[\s,]/.test(this._input.value);
    hasSeparator && this._handleTokensAdded();
  };

  _handleBlur = () => {
    this._handleTokensAdded();
  };

  _handleContainerClick = () => {
    this._input.focus();
  };
}

export default InputEditor;