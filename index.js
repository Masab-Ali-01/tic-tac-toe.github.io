let boxes = document.querySelectorAll(".box");
var turno = true;
var winner = false;
var info = document.querySelector(".message");
info.innerHTML = "O's Turn"
if (winner == false) {
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            if (turno) {
                info.innerHTML = "X's turn"
                box.innerHTML = "O";
                turno = false
                box.disabled = true;
                cheakWinner();
            }
            else {
                info.innerHTML = "O's turn"
                box.innerHTML = "X";
                turno = true;
                box.disabled = true;
                cheakWinner();
            }
        })
    })
}


const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let cheakWinner = () => {
    for (let i = 0; i <= winCombinations.length; i++) {
        var position1 = boxes[winCombinations[i][0]];
        var position2 = boxes[winCombinations[i][1]];
        var position3 = boxes[winCombinations[i][2]];
        if (!(position1.innerHTML == "")) {
            if (!(position2.innerHTML == "")) {
                if (!(position3.innerHTML == "")) {
                    if (position1.innerHTML == position2.innerHTML && position2.innerHTML == position3.innerHTML) {
                        info.innerHTML = `${position1.innerHTML} Wins`;
                        if(info.innerHTML != ""){
                            boxes.forEach(e=>{
                                e.disabled = true;
                            })
                        }
                    }
                }
            }
        }
    }
}

var resetGame = document.querySelector(".reset");
resetGame.addEventListener("click",()=>{
    boxes.forEach(e=>{
        e.innerHTML = "";
        e.disabled = false;
    })
})



