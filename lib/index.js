/* eslint-disable max-len,  require-jsdoc */
export default function(str) {
  str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, '_');
  str = str.replace(/[_]+/gi, '_');

  return str;
}
