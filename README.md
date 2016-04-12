ok.
```bash
$ mocha -r intelli-espower-loader


  espower-loader
    1) ok


  0 passing (25ms)
  1 failing

  1) espower-loader ok:

      AssertionError:   # test/test.js:4

  assert({ hoge: true }.hoge === false)
         |              |    |
         |              true false
         Object{hoge:true}

  [boolean] false
  => false
  [boolean] { hoge: true }.hoge
  => true

      + expected - actual

      -false
      +true

      at decoratedAssert (node_modules/empower/lib/decorate.js:42:30)
      at powerAssert (node_modules/empower/index.js:65:32)
      at Context.<anonymous> (test/test.js:4:5)
```


ng.
```bash
$ mocha src/test/ -r intelli-espower-loader


  espower-loader
    1) ng


  0 passing (12ms)
  1 failing

  1) espower-loader ng:

      AssertionError: false == true
      + expected - actual

      -false
      +true

      at decoratedAssert (node_modules/empower/lib/decorate.js:44:25)
      at powerAssert (node_modules/empower/index.js:65:32)
      at Context.<anonymous> (src/test/test.js:4:5)
```
