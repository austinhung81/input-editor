# Input Editor

> A tagging / tokenizer input filed editor.
> Check out the [demo](https://austinhung81.github.io/input-editor/)

# Usage
Here is a complete example:
```html
<!DOCTYPE html>
<title>Input Editor</title>

<div id="input-editor"></div>
<script src="dist/input-editor.js"></script>
<script>
  const container = document.querySelector('#input-editor');
  const config = {
    inputType: 'email',
    placeholder: 'Add email accounts...',
  }
  const inputEditor = new InputEditor(container, config);
  const tokenList = inputEditor.getTokenList // return all tokens you enter, add or paste
  const validTokenList = inputEditor.getValidTokenList //return all valid tokens you enter, add or paste
  inputEditor.createToken(['john@test.com']);
</script>
```

# Options
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| scoure | array | [] | Can be an array of strings. |
| inputType | string | 'email' | This is useful for specifying an input type like `email`, `url` or `tel`. Currently only supports `email` format. |
| placeholder | string | 'Enter value...' | The placeholder specifies a short hint that describes the expected value of an input field. |

# Getters
| Getter name | Description |
| ------------ | ----------- |
| getTokenList | This getter will return all tokens you enter, add or paste. |
| getValidTokenList | This getter will return all `valid` tokens you enter, add or paste. |

# Methods
| Method name | Description |
| ----------- | ----------- |
| createToken | Manually create tokens and append it to the input. |
