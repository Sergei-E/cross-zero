let cell = document.querySelectorAll(".game-pol"),
    smena = document.getElementById('smena'),
    rez = document.querySelector('.rez'),
    step = 0,
    player = "X",
    WINArr = [
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
        [4, 5, 6],
        [7, 8, 9],
        [8, 9, 10],
        [9, 10, 11],
        [10, 11, 12],
        [13, 14, 15],
        [14, 15, 16],
        [15, 16, 17],
        [16, 17, 18],
        [19, 20, 21],
        [20, 21, 22],
        [21, 22, 23],
        [22, 23, 24],
        [25, 26, 27],
        [26, 27, 28],
        [27, 28, 29],
        [28, 29, 30],
        [31, 32, 33],
        [32, 33, 34],
        [33, 34, 35],
        [34, 35, 36],
        [1, 7, 13],
        [7, 13, 19],
        [13, 19, 25],
        [19, 25, 31],
        [2, 8, 14],
        [8, 14, 20],
        [14, 20, 26],
        [20, 26, 32],
        [3, 9, 15],
        [9, 15, 21],
        [15, 21, 27],
        [21, 27, 33],
        [4, 9, 16],
        [10, 16, 22],
        [16, 22, 28],
        [22, 28, 34],
        [5, 11, 17],
        [11, 17, 23],
        [17, 23, 29],
        [23, 29, 35],
        [6, 12, 18],
        [12, 18, 24],
        [18, 24, 30],
        [24, 30, 36],
        [19, 26, 33],
        [13, 20, 27],
        [20, 27, 34],
        [7, 14, 21],
        [14, 21, 28],
        [21, 28, 35],
        [1, 8, 16],
        [8, 15, 22],
        [15, 22, 29],
        [22, 29, 36],
        [2, 9, 16],
        [9, 16, 23],
        [16, 23, 30],
        [3, 10, 17]
        [10, 17, 24],
        [4, 11, 18],
        [24, 29, 34],
        [18, 23, 28],
        [23, 28, 33]
        [12, 17, 22],
        [17, 22, 27],
        [22, 27, 32],
        [6, 11, 16],
        [11, 16, 21]
        [16, 21, 26],
        [21, 26, 31],
        [5, 10, 15],
        [10, 15, 20],
        [15, 20, 25]
        [4, 9, 14],
        [9, 14, 19],
        [3, 8, 13]
    ];
for (let i = 0; i < 36; i++) {
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
    if (step == 36) {
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
                    for (i = 0; i < 36; i++) {
                        cell[i].removeEventListener("click", ret);
                    }
                } else if (sum === -300) {
                    console.log("Победили крестики");
                    rez.innerHTML = "Победили Крестики";
                    for (i = 0; i < 36; i++) {
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