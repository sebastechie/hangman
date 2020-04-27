
const words = ["hangman"]
// const words = ["apple", "watermelon", "kiwi", "a"]

let randomWordPicker = Math.floor(Math.random() * words.length);
let selectedWord = words[randomWordPicker];
let underscoreLength = [];
console.log(selectedWord);

let charMatching = [];
let notMatching = [];


let resultOutput = document.getElementsByClassName('result')
let wrongMatch = document.getElementsByClassName('errors')


let generateUnderscoreLength = () => {
    for (let i = 0; i < selectedWord.length; i++) {
        underscoreLength.push('_');
    }
    return underscoreLength;
}
console.log(generateUnderscoreLength());


document.addEventListener('keypress', (event) => {
    let typedLetter = String.fromCharCode(event.keyCode);

    if (selectedWord.indexOf(typedLetter) > -1) {
        charMatching.push(typedLetter);
        underscoreLength[selectedWord.indexOf(typedLetter)] = typedLetter;
        resultOutput[0].innerHTML = `Word: ${underscoreLength.join(' ')}`;

        if (underscoreLength.join('') == selectedWord) {
            alert("YOU WIN!!!");
        }

        console.log(charMatching);
    } else {
        notMatching.push(typedLetter);
        wrongMatch[0].innerHTML = notMatching;
        wrongMatch[0].innerHTML = `Used letters: ${notMatching}`;
        console.log(notMatching);
    }
});