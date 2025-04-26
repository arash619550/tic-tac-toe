const winCells1 = [0, 1, 2];
const winCells2 = [3, 4, 5];
const winCells3 = [6, 7, 8];
const winCells4 = [0, 3, 6];
const winCells5 = [1, 4, 7];
const winCells6 = [2, 5, 8];
const winCells7 = [0, 4, 8];
const winCells8 = [2, 4, 6];
let trueMove = 0;
let countMove = 0;
let count = 0;
let countShow = 0;
const h2 = document.querySelector(".h2");
const cells = document.querySelectorAll(".cell");
let o = [];
let x = [];
const btnO = document.querySelector(".btnO");
const btnX = document.querySelector(".btnX");
function startGame() {
    btnO.addEventListener("click", function () {
        h2.innerHTML = "O's turn";
        countShow = 0;
    }, { once: true });
    btnX.addEventListener("click", function () {
        h2.innerHTML = "X's turn";
    }, { once: true });
    countShow = 1;
}
startGame();
function movementO() {
    cells[0].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(0);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(0);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[0].appendChild(currentPlayer);
        count++;
        showCurrentPlayerO();

    }, { once: true });
    cells[1].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(1);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(1);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[1].appendChild(currentPlayer);
        count++;
        showCurrentPlayerO();

    }, { once: true })
    cells[2].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(2);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(2);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[2].appendChild(currentPlayer);
        count++;
        showCurrentPlayerO();

    }, { once: true })
    cells[3].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(3);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(3);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[3].appendChild(currentPlayer);
        showCurrentPlayerO();

        count++;
    }, { once: true })
    cells[4].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(4);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(4);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[4].appendChild(currentPlayer);
        count++;
        showCurrentPlayerO();

    }, { once: true })
    cells[5].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(5);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(5);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[5].appendChild(currentPlayer);
        count++;
        showCurrentPlayerO();

    }, { once: true })
    cells[6].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(6);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(6);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[6].appendChild(currentPlayer);
        count++;
        showCurrentPlayerO();

    }, { once: true })
    cells[7].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(7);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(7);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[7].appendChild(currentPlayer);
        count++;
        showCurrentPlayerO();

    }, { once: true })
    cells[8].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(8);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(8);
            countMove++;
            if (countMove >= 3)
                checkWinO();
        }
        cells[8].appendChild(currentPlayer);
        count++;
        showCurrentPlayerO();
    }, { once: true });
    btnO.classList.add("disable");
    btnX.classList.add("disable");
};
function movementX() {
    cells[0].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(0);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(0);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[0].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true });
    cells[1].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(1);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(1);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[1].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true })
    cells[2].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(2);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(2);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[2].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true })
    cells[3].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(3);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(3);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[3].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true })
    cells[4].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(4);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(4);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[4].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true })
    cells[5].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(5);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(5);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[5].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true })
    cells[6].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(6);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(6);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[6].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true })
    cells[7].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(7);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(7);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[7].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true })
    cells[8].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/x.png";
            o.push(8);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        } else {
            currentPlayer.src = "assets/images/o.png";
            x.push(8);
            countMove++;
            if (countMove >= 3)
                checkWinX();
        }
        cells[8].appendChild(currentPlayer);
        count++;
        showCurrentPlayerX();

    }, { once: true });
    btnO.classList.add("disable");
    btnX.classList.add("disable");
    showCurrentPlayer();
};
function checkWinO() {
    checkWin1XO();
    checkWin2XO();
    checkWin3XO();
    checkWin4XO();
    checkWin5XO();
    checkWin6XO();
    checkWin7XO();
    checkWin8XO();
    checkWin1OO();
    checkWin2OO();
    checkWin3OO();
    checkWin4OO();
    checkWin5OO();
    checkWin6OO();
    checkWin7OO();
    checkWin8OO();
}
function checkWinX() {
    checkWin1XX();
    checkWin2XX();
    checkWin3XX();
    checkWin4XX();
    checkWin5XX();
    checkWin6XX();
    checkWin7XX();
    checkWin8XX();
    checkWin1OX();
    checkWin2OX();
    checkWin3OX();
    checkWin4OX();
    checkWin5OX();
    checkWin6OX();
    checkWin7OX();
    checkWin8OX();
}
function checkWin1XO() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells1.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin2XO() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells2.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin3XO() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells3.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin4XO() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells4.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin5XO() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells5.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin6XO() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells6.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin7XO() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells7.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin8XO() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells8.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin1OO() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells1.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin2OO() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells2.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin3OO() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells3.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin4OO() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells4.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin5OO() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells5.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin6OO() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells6.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin7OO() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells7.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin8OO() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells8.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin1XX() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells1.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin2XX() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells2.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin3XX() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells3.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin4XX() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells4.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin5XX() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells5.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin6XX() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells6.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin7XX() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells7.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin8XX() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells8.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winO();

    }
}
function checkWin1OX() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells1.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin2OX() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells2.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin3OX() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells3.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin4OX() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells4.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin5OX() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells5.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin6OX() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells6.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin7OX() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells7.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function checkWin8OX() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 5; i++) {
            if (winCells8.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        winX();

    }
}
function showCurrentPlayerO() {
    if (countShow % 2 === 0) {
        h2.innerHTML = "X's turn";
    } else {
        h2.innerHTML = "O's turn";
    }
    countShow++;
}
function showCurrentPlayerX() {
    if (countShow % 2 === 0) {
        h2.innerHTML = "X's turn";
    } else {
        h2.innerHTML = "O's turn";
    }
    countShow++;
}
function winX() {
    document.querySelector(".alert-x").style.display = "block";
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.pointerEvents = "none";
    }
}

function winO() {
    document.querySelector(".alert-o").style.display = "block";
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.pointerEvents = "none";
    }
}
