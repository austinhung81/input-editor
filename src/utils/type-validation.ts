/**
 * --------------------------------------------------------------------------
 * Type Validation
 * Check the type of the input string, for exmaple: Email, IP, URL, etc.
 * --------------------------------------------------------------------------
 */
const REGEX = {
  'email': /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
}

export default function validateType(type: string, str: string) {
  if (type === 'email') {
    return REGEX['email'].test(str);
  }
  return false;
}