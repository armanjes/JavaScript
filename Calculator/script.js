// // let display = document.querySelector("input")
// // let buttons = document.querySelectorAll("button")

// // let buttonsArray = [...buttons]
// // buttonsArray.forEach( (btn)=>{
// //     btn.addEventListener('click', (e)=>{
// //         let clickedBtnValue = e.target.textContent

// //         // switch (clickedBtnValue) {
// //         //     case "=":
// //         //       display.value = eval(display.value);
// //         //       break;
// //         //     default:
// //         //       display.value += clickedBtnValue;
// //         //       break;
// //         //   }
// //         if(clickedBtnValue == "="){
// //             display.value = eval(display.value)
// //         }else {
// //             display.value += clickedBtnValue;
// //           }


// //     })
// // })


// let display = document.querySelector("input")
// let buttons = document.querySelectorAll("button")

// let buttonsArray = [...buttons]
// buttonsArray.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         let clickedButton = e.target.textContent;
//         if (clickedButton == '='){
//             display.value = eval(display.value)
//         }else if(clickedButton == "AC"){
//             display.value = null
//         }else if(clickedButton == 'DC'){
//             display.value = display.value.substring(0, display.value.length -1)
//         }else{
//             display.value += clickedButton
//         }
//     })
// })


let display = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let buttonsArray = [...buttons];
buttonsArray.forEach(btn => {
    btn.addEventListener('click', handleButtonClick);
});

function handleButtonClick(e) {
    let clickedButton = e.target.textContent;

    switch (clickedButton) {
        case "=":
            evaluateExpression();
            break;
        case "AC":
            clearDisplay();
            break;
        case "DC":
            deleteLastCharacter();
            break;
        default:
            appendToDisplay(clickedButton);
            break;
    }
}

function evaluateExpression() {
    try {
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function appendToDisplay(value) {
    display.value += value;
}
