# Algorithm playground

For now it only has __'zip'__ completed. See ```algos.js```.

## Unit tests

Please install dependencies.

```
npm install
```

Then run the tests using:

```
npm test
```

You should get an output similar to this:

```
...

> algo-play@1.0.0 test /Users/ezo/Projects/NodeTestTemplate
> node node_modules/mocha/bin/mocha --opts ./mocha.opts $(find functions -name '*.spec.js')

find: functions: No such file or directory


  something
    zip
      ✓ processes with the same length
      ✓ processes when A is longer
      ✓ processes when B is longer
      ✓ returns negative one for numbers greater than 100,000,000


  4 passing (10ms)


```