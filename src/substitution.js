function substitution(input, alphabet, encode = true){
let inputArr = input.toLowerCase().split('');
let cipherAlpha = alphabet.split(''); 
let regularAlfa = "abcdefghijklmnopqrstuvwxyz"
let sortcheck = alphabet.split('').sort().join('');
if (alphabet.length !== 26 || regularAlfa !== sortcheck) return false; 
regularAlfa = regularAlfa.split('')

//the input and the alphabet are now an array of characters and spaces
//check which letter in the regular alphabet matches the checked letter,
//once found, replace checked letter with the letter on the cipher that shares the index with the regular leter found
//set the found flag to true to move on to the next letter

if(encode === true){ 
    for(let ltr in inputArr){
    if (inputArr[ltr] !== " "){
        let found 
        for(let x in regularAlfa){ 
            
            if (inputArr[ltr] === regularAlfa[x] && !found){
                inputArr[ltr] = cipherAlpha[x]
                found = true
            }
        }
    }
    }
}
if(encode === false){ 
    for(let ltr in inputArr){
    if (inputArr[ltr] !== " "){ 
        let found 
        for(let x in cipherAlpha){ 
      
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

module.exports = substitution;
