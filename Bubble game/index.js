
/*=============================================
=            making bubble            =
=============================================*/

function makeBubble() {
    let clutter = "";
    let bubble = document.querySelector('#panel-bottom')

    for (let i = 1; i <= 119; i++) {
        let randomNumber = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${randomNumber}</div>`
    }
    bubble.innerHTML = clutter
}
makeBubble()

/*=====  End of making bubble  ======*/


/*=============================================
=            making timmer section            =
=============================================*/

let time = 59;
let timeIndicator = document.querySelector(".time")
let panelTop = document.querySelector("#panel-top")

setTimeout(()=>{
    panelTop.style.backgroundColor = '#e74c3c'
}, 50000)

function runTime() {
    
    let timer = setInterval(() => {
        if (time >= 0) {
            timeIndicator.innerHTML = `${time--}`
        } else {
            clearInterval(timer);
            let gameOver = document.querySelector("#panel-bottom")
            gameOver.innerHTML = '<i class="fas fa-redo-alt restart-btn"></i>';

            let restartBtn = document.querySelector(".restart-btn")
            restartBtn.addEventListener('click', handelRestart)

            gameOver.style.color = "#2980b9"
            gameOver.style.fontSize = "45px"
            gameOver.style.fontWeight = "600"
            restartBtn.style.cursor = "pointer"
        }
    }, 1000);
}

function handelRestart() {
    location.reload()
}

runTime()


/*=====  End of making timmer section  ======*/


/*=============================================
=            making random hits             =
=============================================*/
let hitRandomNumber = 0
function randomHit() {
    hitRandomNumber = Math.floor(Math.random() * 10)
    document.querySelector(".hits").innerHTML = `${hitRandomNumber}`
}
randomHit()

/*=====  End of making random hits   ======*/


/*=============================================
=            making score            =
=============================================*/
let score = 0
function incScore() {
    score += 5
    document.querySelector(".score").innerHTML = `${score}`
}

document.querySelector("#panel-bottom").addEventListener('click',
    function (dets) {
        let clickedNumber = Number(dets.target.textContent);

        if (clickedNumber === hitRandomNumber) {
            incScore()
            randomHit()
            makeBubble()
        }
    })

/*=====  End of making score  ======*/

