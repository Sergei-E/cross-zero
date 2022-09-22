let cell = document.querySelectorAll(".game-pol"),
    smena = document.getElementById('smena'),
    rez = document.querySelector('.rez'),
    step = 0,
    player = "X",
    WINArr = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [4, 8, 12, 16],
        [1, 6, 11, 16],
        [4, 7, 10, 13]
    ];


for (let i = 0; i < 16; i++) {
    cell[i].addEventListener('click', ret);
}

function ret() {
    num = +this.getAttribute("data-sell");
    this.innerText = player;
    player === "X" ? this.classList.add("x") : this.classList.add("o");
    player === "X" ? player = "O" : player = "X";
    step++;
    smena.value = "Ходит игрок " + player;
    rezul(WINArr, num);
    if (step == 16) {
        rez.innerHTML = "Ничья";
        console.log("Ничья");
    }
}

function rezul(WINArr, num) {
    for (let t = 0; t < WINArr.length; t++) {
        for (let w = 0; w < 4; w++) {
            if (WINArr[t][w] === num) {
                if (player === "X") {
                    WINArr[t][w] = 0;
                }
                if (player === "O") {
                    WINArr[t][w] = -100;
                }
                let sum = WINArr[t][0] + WINArr[t][1] + WINArr[t][2] + WINArr[t][3];
                if (sum === 0) {
                    console.log("Победили нолики");
                    rez.innerHTML = "Победили нолики";
                    for (i = 0; i < 16; i++) {
                        cell[i].removeEventListener("click", ret);
                    }
                } else if (sum === -400) {
                    console.log("Победили крестики");
                    rez.innerHTML = "Победили Крестики";
                    for (i = 0; i < 16; i++) {
                        cell[i].removeEventListener("click", ret);
                    }
                }
            }
        }
    }
}

function NewGeme() {
    location.reload();
}