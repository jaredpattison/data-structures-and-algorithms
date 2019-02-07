'use strict';

let Hashtable = require('../hashtable');

function repeatedWord(str) {

  let arr = str.toLowerCase().split(/(?:,| )+/);

  let hash = new Hashtable(1024);

  for(let i = 0; i < arr.length; i++) {
    if(hash.contains(arr[i])) {
      return arr[i];
    }
    hash.add(arr[i], null);
  }

  return null;
}


console.log(repeatedWord('It was a queer, sultry Summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'));
// repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...');
