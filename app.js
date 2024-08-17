

var img = document.querySelector('img')
var masjid = document.querySelector ('#masjid')
var chand = document.querySelector ('#chand')
var p = document.querySelector ('p')

function tossCoin (coin) {
    
    var randomNumber = Math.floor(Math.random()*2)
    
    if (randomNumber === 0 && coin === 'masjid') {
        img.src = 'https://en.numista.com/catalogue/photos/pakistan/581-original.jpg'
        p.innerHTML = 'You won the toss'
    }else if (randomNumber === 0 && coin === 'chand') {
        img.src = 'https://en.numista.com/catalogue/photos/pakistan/581-original.jpg'
        p.innerHTML = 'You loss the toss'
    }else if (randomNumber === 1 && coin === 'chand') {
        img.src = 'https://en.numista.com/catalogue/photos/pakistan/582-original.jpg'
        p.innerHTML = 'You won the toss'
    }else if (randomNumber === 1 && coin === 'masjid') {
        img.src = 'https://en.numista.com/catalogue/photos/pakistan/582-original.jpg'
        p.innerHTML = 'You loss the toss'
    }
}