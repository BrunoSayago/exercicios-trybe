let word = "bruno sayago";
let newWord = "";

for (let index = word.length - 1; index >= 0 ; index -= 1) {
    newWord = newWord + word[index]
}

console.log(newWord);