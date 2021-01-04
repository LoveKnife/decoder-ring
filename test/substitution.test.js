// Write your tests here!
const expect = require('chai').expect;
const substitution = require (`../src/substitution.js`);

describe(`substitution`,()=>{
    it(`Spaces should be maintained throughout.`,()=>{
        const actual = substitution("s p a c e","xoyqmcgrukswaflnthdjpzibev")
        const expected = "d n x y m"

        expect(actual).to.equal(expected);
    });
    
    it(`Capital letters can be ignored`, ()=>{
        const actual = substitution("UPPERCASETEXT","xoyqmcgrukswaflnthdjpzibev")
        const expected = "pnnmhyxdmjmbj"

        expect(actual).to.equal(expected);
    });
    
    it(`The alphabet parameter must be string of exactly 26 characters. Otherwise, it should return false.`, ()=>{
        const actual = substitution("test string","this isn't an a alphabet")

        expect(actual).to.be.false;
    });

    it(`All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.`, ()=>{
        const actual = substitution("test string","aaaaaaaaaaaaaaaaaaaaaaaaaa")

        expect(actual).to.be.false;
    });

    
})