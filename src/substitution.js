function substitution(input, alphabet, encode = true){
let inputArr = input.toLowerCase().split('');
let cipherAlpha = alphabet.split(''); 
let regularAlfa = "abcdefghijklmnopqrstuvwxyz"
let sortcheck = alphabet.split('').sort().join('');
if (alphabet.length !== 26 || regularAlfa !== sortcheck) return false; 
regularAlfa = regularAlfa.split('')
if(encode){ 
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
if(!encode){ 
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
