let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');
let question = document.getElementById('question');
let content = document.querySelector('.content');
let buttons = document.querySelector('.buttons');

yesBtn.addEventListener('click', function() {
    question.innerHTML = "YAY!!! see u sa foundation <3333";
    buttons.style.display = 'none';

    // Create an img element for the "yes.png" image
    let image = document.createElement('img');
    image.src = "resources/yes.png";
    image.alt = "Yes Image";
    content.appendChild(image);
});

let yesBtnSize = 18; // Define the initial font size for the "Yes" button

noBtn.addEventListener('click', function() {
    yesBtnSize += 2;
    yesBtn.style.fontSize = yesBtnSize + 'px';
});
