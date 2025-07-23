let card = document.getElementById('card');
let cover = document.getElementById('cover');
let insideCover = document.getElementById('insideCover');
let openBtn = document.getElementById('openBtn');

let audio1 = new Audio('./audio/test.mp3');

async function load() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let submitBtn = document.getElementById('submitBtn');
    let doornumberInput = document.getElementById('doorNumberInput');
    let codeInput = document.getElementById('codeInput');
    submitBtn.addEventListener('click', () => {
        if (doornumberInput.value === '302' && codeInput.value === '336699') {
            document.body.classList.add('logged');
            load2();
        } else audio1.play();
        doornumberInput.value = '';
        codeInput.value = '';
    });
    card = document.getElementById('card');
    cover = document.getElementById('cover');
    insideCover = document.getElementById('insideCover');
}

async function load2() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    card.classList.add('loaded');
    openBtn = document.getElementById('openBtn');
    openBtn.addEventListener('click', toggleOpen);
}

load();

async function toggleOpen() {
    card.classList.toggle('closed');
    openBtn.textContent = card.classList.contains('closed') ? 'open' : 'close';
}
