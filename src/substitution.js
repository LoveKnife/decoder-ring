function substitution(input, alphabet, encode = true){
if (alphabet.length !== 26) return false; 
let inputArr = input.toLowerCase().split('');
let cipherAlpha = alphabet.split(''); 
let regularAlfa = "abcdefghijklmnopqrstuvwxyz"
regularAlfa = regularAlfa.split('')
//the input and the alphabet are now an array of characters and spaces
if(encode === true){ //if encode is true, encode the input
    for(let ltr in inputArr){ //check every letter in the input
    if (inputArr[ltr] !== " "){ //if it's not a space --
        let found 
        for(let x in regularAlfa){ 
            //check which letter in the regular alphabet matches the checked letter,
            //once found, replace checked letter with the letter on the cipher that shares the index with the regular leter found
            //set the found flag to true to move on to the next letter
            if (inputArr[ltr] === regularAlfa[x] && !found){
                inputArr[ltr] = cipherAlpha[x]
                found = true
            }
        }
    }
    }
}
if(encode === false){ //if encode is false, decode the input
    for(let ltr in inputArr){ //check every letter in the input
    if (inputArr[ltr] !== " "){ //if it's not a space --
        let found 
        for(let x in cipherAlpha){ 
            //check which letter in the cipher alphabet matches the checked letter,
            //once found, replace checked letter with the letter on the regular alphabet that shares the index with the cipher leter found
            //set the found flag to true to move on to the next letter
            if (inputArr[ltr] === cipherAlpha[x] && !found){
                inputArr[ltr] = regularAlfa[x]
                found = true
            }
        }
    }
    }
}
return inputArr.join('');
}


console.log(substitution("ale x","xoyqmcgrukswaflnthdjpzibev"))
console.log(substitution("xwm b","xoyqmcgrukswaflnthdjpzibev",false))

module.exports = substitution;
