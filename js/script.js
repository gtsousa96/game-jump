const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const jump = () => {
    mario.classList.add('jump');

    setTimeout (() => {

        mario.classList.remove('jump')

    }, 500);
}

const loop = setInterval(() => {

console.log('loop')

const tuboPosition = tubo.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if (tuboPosition <= 90 && tuboPosition > 0 && marioPosition < 50) {

    tubo.style.animation = 'none';
    tubo.style.left = `${tuboPosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'imagens/mariodeath.gif';
    mario.style.width = '60px'
    mario.style.marginLeft = '50px'
    mario.style.marginBottom = '40px'

    clearInterval(loop);
}

}, 10);

document.addEventListener('keydown', jump);