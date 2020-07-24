const div = document.querySelector('[wm-flappy]');
const button = document.querySelector('.start');
const img = document.createElement('img');

img.src = './imgs/passaro.png'
img.classList.add('passaro');
img.style.width = '5%';
img.style.position = 'absolute';
img.style.top = '250px';
img.style.left = '30%';

button.onclick = e => {
    button.style.display = 'none';
}

div.appendChild(img);