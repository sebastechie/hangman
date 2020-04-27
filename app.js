
const words = ["apple", "watermelon", "kiwi", "a"]

let randomWordPicker = Math.floor(Math.random() * words.length);
let selectedWord = words[randomWordPicker];
let underscoreLength = [];
console.log(selectedWord);

let charMatching = [];
let notMatching = [];


let generateUnderscoreLength = () => {
    for (let i = 0; i < selectedWord.length; i++) {
        underscoreLength.push('_');
    }
    return underscoreLength;
}
console.log(generateUnderscoreLength());


document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(event.keyCode);
    
    if (selectedWord.indexOf(keyword) > -1) {
        charMatching.push(keyword);
        console.log(charMatching);
    } else {
        notMatching.push(keyword);
        console.log(notMatching);
    }
});