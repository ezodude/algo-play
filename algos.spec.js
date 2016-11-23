'use strict';

const chai        = require('chai')
    , expect      = chai.expect;

const algos = require('./algos');

describe('something', function () {
  describe('zip', function () {
    it("processes with the same length", function () {
      expect(algos.zip(123, 456)).to.be.equal(142536);
    });

    it("processes when A is longer", function () {
      expect(algos.zip(1234, 78)).to.be.equal(172834);
    });

    it("processes when B is longer", function () {
      expect(algos.zip(78, 1234)).to.be.equal(718234);
    });

    it("returns negative one for numbers greater than 100,000,000", function () {
      expect(algos.zip(10000, 10000)).to.be.equal(-1);
    });
  });
});