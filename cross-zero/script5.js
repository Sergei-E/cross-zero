let cell = document.querySelectorAll(".game-pol"),
    smena = document.getElementById('smena'),
    rez = document.querySelector('.rez'),
    step = 0,
    player = "X",
    WINArr = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [5, 10, 15, 20, 25],
        [1, 7, 13, 19, 25],
        [5, 9, 13, 17, 21]
    ];


for (let i = 0; i < 25; i++) {
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
    if (step == 25) {
        rez.innerHTML = "Ничья";
        console.log("Ничья");
    }
}

function rezul(WINArr, num) {
    for (let t = 0; t < WINArr.length; t++) {
        for (let w = 0; w < 5; w++) {
            if (WINArr[t][w] === num) {
                if (player === "X") {
                    WINArr[t][w] = 0;
                }
                if (player === "O") {
                    WINArr[t][w] = -100;
                }
                let sum = WINArr[t][0] + WINArr[t][1] + WINArr[t][2] + WINArr[t][3] + WINArr[t][4];
                if (sum === 0) {
                    console.log("Победили нолики");
                    rez.innerHTML = "Победили нолики";
                    for (i = 0; i < 25; i++) {
                        cell[i].removeEventListener("click", ret);
                    }
                } else if (sum === -500) {
                    console.log("Победили крестики");
                    rez.innerHTML = "Победили Крестики";
                    for (i = 0; i < 25; i++) {
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