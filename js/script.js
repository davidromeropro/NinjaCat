// let testFunction = (element) => {
//     // let test = document.getElementById("test");
//     element.style.transform = "rotate(90deg)";
//     // element.className = "ninety-deg";
//     // console.log(test.style);
// }


//Click se cambia cada parte entre gato y ninja.
const changeImage = (element) => {
    let degrees = 90;
    let intervalStyle = setInterval(()=>{
        console.log(degrees)
        if(degrees===450){
            clearInterval(intervalStyle);
            if (element.src.includes("cat")) {
                element.src = element.src.replace("cat", "ninja");
            } else {
                element.src = element.src.replace("ninja", "cat");
            }
        }else{
            element.style.transform = "rotate("+degrees+"deg)";
            degrees+=90;
        }
    },1000/4);
}

// Botones start y stop 
// Tiempo de 1 s
// Cambia una seccion
let interval;
let delay = 1;
let count = 0;
let downDirection = true;
let startLoop = () => {
    interval = setInterval(() => {
        if (downDirection) {
            if (count > 4) {
                count = 0;
            }
        } else {
            if (count < 0) {
                count = 4;
            }
        }
        // console.log(count, downDirection);
        let image = document.querySelector("#image-" + count);
        changeImage(image);

        if (downDirection) {
            if (count <= 4) {
                count++;
            }
        } else {
            if (count >= 0) {
                count--;
            }
        }
    }, delay * 10);
}

let updateIntervalDelay = (element) => {
    delay = element.value;
    stopLoop();
    startLoop();
}

let stopLoop = () => {
    clearInterval(interval);
}

// check button indica la direccion del cambio si es de arriba a abajo o de abajo arriba.
let changeDirection = (element) => {
    downDirection = element.checked;
    // if(!count){
    //     if (downDirection) {
    //         count = 0;
    //     } else {
    //         count = 4;
    //     }
    // }
}

// rotando

