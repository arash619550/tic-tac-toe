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
const cells = document.querySelectorAll(".cell");
let o = [];
let x = [];
function movement() {
    cells[0].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(0);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(0);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[0].appendChild(currentPlayer);
        count++;
    }, { once: true });
    cells[1].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(1);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(1);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[1].appendChild(currentPlayer);
        count++;
    }, { once: true })
    cells[2].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(2);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(2);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[2].appendChild(currentPlayer);
        count++;
    }, { once: true })
    cells[3].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(3);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(3);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[3].appendChild(currentPlayer);
        count++;
    }, { once: true })
    cells[4].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(4);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(4);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[4].appendChild(currentPlayer);
        count++;
    }, { once: true })
    cells[5].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(5);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(5);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[5].appendChild(currentPlayer);
        count++;
    }, { once: true })
    cells[6].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(6);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(6);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[6].appendChild(currentPlayer);
        count++;
    }, { once: true })
    cells[7].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(7);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(7);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[7].appendChild(currentPlayer);
        count++;
    }, { once: true })
    cells[8].addEventListener("click", function () {
        const currentPlayer = document.createElement("img");
        if (count % 2 === 0) {
            currentPlayer.src = "assets/images/o.png";
            o.push(8);
            countMove++;
            if (countMove >= 3)
                checkWin();
        } else {
            currentPlayer.src = "assets/images/x.png";
            x.push(8);
            countMove++;
            if (countMove >= 3)
                checkWin();
        }
        cells[8].appendChild(currentPlayer);
        count++;
    }, { once: true })
};
movement();

function checkWin() {
    checkWin1X();
    checkWin2X();
    checkWin3X();
    checkWin4X();
    checkWin5X();
    checkWin6X();
    checkWin7X();
    checkWin8X();
    checkWin1O();
    checkWin2O();
    checkWin3O();
    checkWin4O();
    checkWin5O();
    checkWin6O();
    checkWin7O();
    checkWin8O();
    if (countMove >= 9) {
        alert("Draw");
        location.reload();
    }
}
function checkWin1X() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells1.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("X wins");
        location.reload();
    }
}
function checkWin2X() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells2.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("X wins");
        location.reload();
    }
}
function checkWin3X() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells3.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("X wins");
        location.reload();
    }
}
function checkWin4X() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells4.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("X wins");
        location.reload();
    }
}
function checkWin5X() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells5.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("X wins");
        location.reload();
    }
}
function checkWin6X() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells6.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("X wins");
        location.reload();
    }
}
function checkWin7X() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells7.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("X wins");
        location.reload();
    }
}
function checkWin8X() {
    trueMove = 0;
    let win = false;
    let sortedX = x.sort();
    if (sortedX.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells8.includes(sortedX[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("X wins");
        location.reload();
    }
}
function checkWin1O() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells1.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("O wins");
        location.reload();
    }
}
function checkWin2O() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells2.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("O wins");
        location.reload();
    }
}
function checkWin3O() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells3.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("O wins");
        location.reload();
    }
}
function checkWin4O() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells4.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("O wins");
        location.reload();
    }
}
function checkWin5O() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells5.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("O wins");
        location.reload();
    }
}
function checkWin6O() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells6.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("O wins");
        location.reload();
    }
}
function checkWin7O() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells7.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("O wins");
        location.reload();
    }
}
function checkWin8O() {
    trueMove = 0;
    let win = false;
    let sortedO = o.sort();
    if (sortedO.length >= 3) {
        for (let i = 0; i <= 3; i++) {
            if (winCells8.includes(sortedO[i])) {
                trueMove++;
                if (trueMove === 3) {
                    win = true;
                }
            }
        }
    }
    if (win) {
        alert("O wins");
        location.reload();
    }
}