import "./index.less";
import InputEditor from '../src';

const timestamp = new Date().getTime();
const container = document.querySelector<HTMLElement>('#input-editor-container');
const config = {
  inputType: 'email',
  placeholder: "Add email accounts...",
}
const inputEditor = container && new InputEditor(container, config);
const addBtn = document.querySelector<HTMLElement>('.btn.add-email');
const getBtn = document.querySelector<HTMLElement>('.btn.get-email-count');
addBtn?.addEventListener('click', () => {
  inputEditor?.createToken([`${timestamp}@test.com`]);
});

getBtn?.addEventListener('click', () => {
  const validTokens = inputEditor && inputEditor.getValidTokenList;
  alert (`Number of valid emails: ${validTokens?.length}`);
});