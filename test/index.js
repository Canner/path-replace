import assert from 'assert';
import pathReplace from '../src';
const str = `test~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\  \\/test2`;

describe('path-replace', function() {
  it('should replace / to underscore', () => {
    assert.equal(pathReplace('test / test'), 'test_test');
  });

  it('replace special charactor to underscore', function() {
    assert.equal(pathReplace(str), 'test_test2');
  });
});
