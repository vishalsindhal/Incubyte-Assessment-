const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let x = canvas.width / 2 - 50
let y = canvas.height / 2 - 50 
let vx = 0
let vy = 0

addEventListener('keydown', function(e) {
    if (e.code == 'KeyL') {
        vx = -5;
        vy = 0;
    } 
    else if (e.code == 'KeyR') {
        vx = 5;
        vy = 0;
    } 
    else if (e.code == 'KeyF') {
        vy = -5;
        vx = 0;
    } 
    else if (e.code == 'KeyB') {
        vy = 5;
        vx = 0;
    }
})

addEventListener('keyup', function(e) {
    if(e.code == 'KeyL')
        vx = 0
    if(e.code == 'KeyR')
        vx = 0
    if(e.code == 'KeyF')
        vy = 0
    if(e.code == 'KeyB')
        vy = 0
})

function update() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    x += vx
    y += vy
    ctx.fillRect(x, y, 100, 100) 
    requestAnimationFrame(update)
}

update()