let cell = document.querySelectorAll(".game-pol"),
    smena = document.getElementById('smena'),
    rez = document.querySelector('.rez'),
    step = 0,
    player = "X",
    WINArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];


for (let i = 0; i < 9; i++) {
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
    if (step == 9) {
        rez.innerHTML = "Ничья";
        console.log("Ничья");
    }
}

function rezul(WINArr, num) {
    for (let t = 0; t < WINArr.length; t++) {
        for (let w = 0; w < 3; w++) {
            if (WINArr[t][w] === num) {
                if (player === "X") {
                    WINArr[t][w] = 0;
                }
                if (player === "O") {
                    WINArr[t][w] = -100;
                }
                let sum = WINArr[t][0] + WINArr[t][1] + WINArr[t][2];
                if (sum === 0) {
                    console.log("Победили нолики");
                    rez.innerHTML = "Победили нолики";
                    for (i = 0; i < 9; i++) {
                        cell[i].removeEventListener("click", ret);
                    }
                } else if (sum === -300) {
                    console.log("Победили крестики");
                    rez.innerHTML = "Победили Крестики";
                    for (i = 0; i < 9; i++) {
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