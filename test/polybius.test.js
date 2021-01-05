// Write your tests here!
const expect = require(`chai`).expect;
const polybius = require(`../src/polybius.js`);

describe(`polybius`,()=>{
    it(`When encoding, your output should still be a string.`,()=>{
        const actual = polybius(`word`);
        expect(actual).to.be.a("string");
    })

    it(`When decoding, the number of characters in the string excluding spaces should be even.
     Otherwise, return false.`,()=>{
         const actual = polybius(`231`,false);
         expect(actual).to.be.false;
     })

     it('While encoding, spaces should be maintained throughout.',()=>{
        const actual = polybius(`words with spaces`)
        expect(actual).to.equal(`2543244134 25424432 345311315134`);
     })

})