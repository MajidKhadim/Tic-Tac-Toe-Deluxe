let boxes = document.querySelectorAll(".boxes");
let turn = "Player 1";
let gameState = ["", "", "", "", "", "", "", "", ""];
let resetBtn = document.getElementById('reset');
function createShape(box) {
    if (turn == "Player 1") {
        const shape = document.createElement('div');
        shape.classList.add('circle');
        box.appendChild(shape);
    }
    else {
        const shape = document.createElement('div');
        shape.classList.add('rectangle');
        box.appendChild(shape);
    }

}
boxes.forEach(function (box, index) {
    box.addEventListener('click', () => {
        console.log(`button clicked is ${index + 1}`);
        if (box.childElementCount == 0) {
            createShape(box);
            gameState[index] = turn;
            turn = (turn == "Player 1") ? "Player 2" : "Player 1";
        }
        if (checkWin()) {
            setTimeout(() => {
                alert(`Congrats🥳🥳!!  ${gameState[index]}  Won!!`);
                resetGame();
                return;
            }, 100)

        }
        else if (!gameState.includes("")) {
            setTimeout(() => {
                alert("Its a Draw");
                resetGame();
                return;
            }, 400)

        }
    }
    )

})
resetBtn.addEventListener('click',()=>{
    resetGame();
})
function checkWin() {
    let winConditions = [
        [0, 2, 4], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winConditions.some((el) => {
        const [a, b, c] = el;
        return (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[a] === gameState[c]);
    })
}

const resetGame = () => {
    boxes.forEach((el) => {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    })
    gameState = ["", "", "", "", "", "", "", "", ""];
    turn = "Player 1";
}