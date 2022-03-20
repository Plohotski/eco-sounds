
let isPlay = false;
const audio = new Audio();
audio.src = './assets/audio/forest.mp3';
function playAudio() {
    if (!isPlay) {
        audio.play();
        isPlay = true
    }
    else {
        audio.pause();
        isPlay = false
    }
}

const button = document.querySelector('.play-main');

button.onclick = function () {
    button.classList.toggle('active')
    playAudio();
    }
    


const birds = ['forest', 'solovey', 'drozd', 'javoronok', 'slavka', 'zarynka']
    
function preload() {
    for (let j = 0; j < birds.length; j++){
            const img = new Image();
            img.src = './assets/img/${birds[j]}.jpg';
            const sound = new Audio();
            sound.src = './assets/audio/${birds[j]}.mp3';
        }
}
preload()

const navItems = document.querySelectorAll('.nav-item')

const playMain = document.querySelector('.main')

const forestBird = document.querySelector('.header-logo')
forestBird.onclick = function () {switchSound(forestBird)}
const soloveyBird = document.querySelector('.solovey')
soloveyBird.onclick = function () { switchSound(soloveyBird) }
const javoronokBird = document.querySelector('.javoronok')
javoronokBird.onclick = function () { switchSound(javoronokBird) }
const slavkaBird = document.querySelector('.slavka')
slavkaBird.onclick = function () { switchSound(slavkaBird) }
const zarynkaBird = document.querySelector('.zarynka')
zarynkaBird.onclick = function () {switchSound(zarynkaBird)}
const drozdBird = document.querySelector('.drozd')
drozdBird.onclick = function () {switchSound(drozdBird)}

function switchSound(items) {
    if (!items.classList.contains('active')) {
        for (let i = 0; i < navItems.length; i++){
            navItems[i].classList.remove('active')
            playMain.classList.remove(birds[i])
        }
        items.classList.add('active')           
        playMain.classList.toggle(items.dataset.item)
        audio.src = `./assets/audio/${items.dataset.item}.mp3`
        if (!button.classList.contains('active'))
            button.classList.toggle('active')
        isPlay = false
        playAudio()
    } else {
        playAudio()
        button.classList.toggle('active')
    }
}