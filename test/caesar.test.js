// Write your tests here!
const expect = require(`chai`).expect;
const caesar = require (`../src/caesar.js`);

describe(`caesar`,()=>{
    it(`Should encode a string by using the shift value`,()=>{
        const actual = caesar(`abcd`,2);
        const expected = `cdef`;
        expect(actual).to.equal(expected)
    })
    
    it(`Should decode a string by using the shift value`,()=>{
        const actual = caesar(`cdef`,2,false);
        const expected = `abcd`;
        expect(actual).to.equal(expected)
    })
    
    it(`If the shift value is not present, 
    equal to 0, less than -25, or greater than 25, the function should return false.`,()=>{
        const actual = caesar(`word`,99);
        expect(actual).to.be.false;
    });

    it(`Spaces should be maintained throughout, as should other non-alphabetic symbols.`,()=>{
        const actual = caesar(`word with spaces`,1);
        expect(actual).to.include(" ");
    })
    
    it(`Capital letters can be ignored.`,()=>{
        const actual = caesar("ALLCAPSMODE",3);
        const expected = "doofdsvprgh";
        expect(actual).to.equal(expected);
    })

    it(`If a letter is shifted so that it goes "off" the alphabet 
    (e.g. a shift of 3 on the letter "z"), 
    it should wrap around to the front of the alphabet 
    (e.g. "z" becomes "c").`,()=>{
        const actual = caesar("wxyz",5);
        const expected = "bcde";
        expect(actual).to.equal(expected);
    })
})