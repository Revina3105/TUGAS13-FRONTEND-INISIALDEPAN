// const generateDot = function () {
//     const dot = document.querySelector("div.dot")
//     const boxDots = document.querySelector("div.boxDots")
   
//     let dots = ""
//     for (let idx = 0; idx < 5; idx++) {
//         for (let index = 0; index < 5; index++) {
//             // dots += dot.outerHTML
//                 if (
//                     (idx == 0 && index < 5) ||
//                     (idx == 2 && index < 5) ||
//                     (idx == 4 && index < 5) ||
//                     (idx == 1 && index == 0)
//                     // (idx == 3 && index == 4)
//                 ) {
//                     dots += "<div class='dot bgBlack'>" + idx + "-" + index + "</div>";
//                 } else {
//                     dots += "<div class='dot>" + idx + "-" + index + "</div>";
//                 }
//             }
//             dots += "<br>";
    
//     console.log(dots);
//     boxDots.innerHTML = dots
//     }
// }
// const __init = function () {
//     generateDot() 

// }
// __init()

//Deklarasi function
const generateDots = function() {
    const circleDot = document.querySelector("div.boxDots");

    let dots = "";
    for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                
            if (
                (row == 0 && col < 5) ||
                (row == 1 && col == 0) ||
                (row == 1 && col == 4) ||
                (row == 2 && col < 5) ||
                (row == 3 && col == 0) ||
                (row == 3 && col == 3) ||
                (row == 4 && col == 0) ||
                (row == 4 && col == 4)
            ) {
                dots += "<div class='dot dotBlack'>" + "</div>";
                // dots += "<div class='dot dotBlack'>" + row + "-" + col + "</div>";
            } else {
                dots += "<div class='dot'>" + "</div>";
                // dots += "<div class='dot'>" + row + "-" + col +"</div>";
            }
        }
        dots += "<br>";
    }
    console.log(dots);
    circleDot.innerHTML = dots;
};
const __init = function() {
    generateDots();
};

__init();

