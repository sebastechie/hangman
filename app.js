
const words = ["apple", "watermelon", "kiwi", "a"]

let randomWordPicker = Math.floor(Math.random() * words.length);
let selectedWord = words[randomWordPicker];
let underscoreLength = [];
// console.log(selectedWord);

let generateUnderscoreLength = () => {
    for (let i = 0; i < selectedWord.length; i++) {
        underscoreLength.push('_');
    }
    return underscoreLength;
}
console.log(generateUnderscoreLength());
