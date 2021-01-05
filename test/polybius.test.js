// Write your tests here!
const expect = require(`chai`).expect;
const polybius = require(`../src/polybius.js`);

describe(`polybius`,()=>{
    it(`should encode a message by using the cipher table`,()=>{
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    })
    
    it(`should decode a message by using the cipher table`,()=>{
        const actual = polybius("3251131343",false);
        const expected = "hello";
        expect(actual).to.eql(expected);
    })

    it(`When encoding, your output should still be a string.`,()=>{
        const actual = polybius(`word`);
        expect(actual).to.be.a(`string`);
    })

    it(`When decoding, the number of characters in the string excluding spaces should be even.
     Otherwise, return false.`,()=>{
         const actual = polybius(`231`,false);
         expect(actual).to.be.false;
     })

    it('While encoding, spaces should be maintained throughout.',()=>{
        const actual = polybius(`words with spaces`);
        const expected =`2543244134 25424432 345311315134`
        expect(actual).to.eql(expected);
     })

    it(`While decoding, spaces should be maintained throuhout.`,()=>{
         const actual = polybius(`12 12 1212`,false);
         const expected =`f f ff`
         expect(actual).to.eql(expected);
     
        })
    
    it(`Capital letters should be ignored`,()=>{
        const actual = polybius(`ABCD`);
        const expected = `11213141`
        expect(actual).to.eql(expected);
    })

    it(`The letters "I" and "J" share a space. When encoding, 
    both letters can be converted to 42`,()=>{
        const actual = polybius(`f f if`);
        const expected =`12 12 4212`
        expect(actual).to.eql(expected);
    })

    it(`The letters "I" and "J" share a space. 
    when decoding, both letters should somehow be shown.`,()=>{
        const actual = polybius(`12 12 4212`,false);
        const expected =`f f (i/j)f`
        expect(actual).to.eql(expected);
    })

})