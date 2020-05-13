const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Welcome,', 'I am Lukasz', 'and this is my project...']

let activeWords = 0;
let activeLetters = -5;


const addLetter = () => {
    if (activeLetters >= 0) {
        spnText.textContent += txt[activeWords][activeLetters];
    }
    activeLetters++;
    if (activeLetters === txt[activeWords].length) {
        activeWords++;
        if (activeWords === txt.length) return;

        return setTimeout(() => {
            activeLetters = -5;
            spnText.textContent = '';
            addLetter();
        }, 1000)

    }

    setTimeout(addLetter, 200);
}


addLetter();



const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);