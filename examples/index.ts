import "./index.less";
import InputEditor from '../src';
const timestamp = new Date().getTime();
const container = <HTMLElement>document.querySelector('#input-editor-container');
const config = {
  inputType: 'email',
  placeholder: "Enter email addresses…",
}
const inputEditor = new InputEditor(container, config);

document.querySelector('.btn.add-email').addEventListener('click', () => {
  inputEditor.createToken([`${timestamp}@test.com`]);
});

document.querySelector('.btn.get-email-count').addEventListener('click', () => {
  const validTokens = inputEditor.getValidTokenList;
  console.log(validTokens)
  alert (`Number of valid emails: ${validTokens.length}`);
});