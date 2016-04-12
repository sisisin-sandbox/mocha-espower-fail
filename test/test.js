const assert = require('power-assert');
describe('espower-loader', () => {
  it('ok', () => {
    assert({hoge:true}.hoge === false);
  });
});
