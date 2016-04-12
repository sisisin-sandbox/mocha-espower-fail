const assert = require('power-assert');
describe('espower-loader', () => {
  it('ng', () => {
    assert({hoge:true}.hoge === false);
  });
});
