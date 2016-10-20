'use strict';

module.exports = {
  zip(A, B) {

    const calcZip = (a, b, lastZip) => {
      lastZip = lastZip + `${a.shift()}${b.shift()}`;
      return a.length === 0 || b.length === 0 ? lastZip : calcZip(a, b, lastZip);
    };

    const aAsArray = `${A}`.split('')
          , bAsArray = `${B}`.split('');

    let zipped = calcZip(aAsArray, bAsArray, '');
    zipped = zipped + aAsArray.join('') + bAsArray.join('');

    return zipped > 100000000 ? -1 : parseInt(zipped, 10);
  }
};
