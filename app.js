const spinBtn = document.getElementById('spinBtn')
const coin = document.getElementById('coinrWapper')
const coinImg = coin.querySelector('img');
const headSpan = document.getElementById('headSpan');
const tailSpan = document.getElementById('tailSpan');
const shadowImg = document.getElementById('shadowWrapper')

let rotation = 0;

function spin(){

    const isHeads = Math.random() < 0.5;

    if(isHeads) {
            coinImg.src = './resources/heads.svg'
            headSpan.style.display = 'unset'
            tailSpan.style.display = 'none'
        }else{
            coinImg.src = './resources/tails.svg'
            tailSpan.style.display = 'unset'
            headSpan.style.display = 'none'
        }

}

spinBtn.addEventListener('click', () => {
    rotation += 1080;
    coin.style.transform = `rotateX(${rotation}deg)`;
    shadowImg.style.transform = `rotateY(${rotation}deg)`;

    setTimeout(spin, 1000)
});

coin.addEventListener('click', () => {
    rotation += 1080;
    coin.style.transform = `rotateX(${rotation}deg)`;
    shadowImg.style.transform = `rotateY(${rotation}deg)`;

    setTimeout(spin, 1000)
});
