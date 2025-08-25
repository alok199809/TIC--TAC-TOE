let boxes = document.querySelectorAll(".box")
let msg = document.querySelector(".msg")
let rstbtn = document.getElementById("rstbtn")
let newbtn = document.getElementById("newbtn")

let turnO = true;
let count = 0;
let bx = ""

const winpatrn = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerHTML !== "") return;

        if (turnO) {
            console.log("o")
            box.innerHTML = "O"
            box.style.boxShadow = "inset 10px 8px 33px 7px rgb(192, 100, 184)";
            turnO = false;
        } else {
            console.log("x")
            box.innerHTML = "X"
            box.style.boxShadow = "inset 10px 8px 33px 7px rgb(192, 100, 184)";

            turnO = true;
        }
        count++;

        let iswiner = checkwinner()
        if (count === 9 && !iswiner) {
            let gamedraw = true;
            boxes.forEach(box => {
                if (box.innerHTML = "") {
                    gamedraw = false;
                } if (gamedraw) {
                    msg.innerHTML = "GAME WAS DRAW!";
                }

            });
        }
    })
});

newbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerHTML = ""
        box.style.pointerEvents = "auto";
        box.style.boxShadow = "10px 8px 33px 7px rgb(192, 100, 184)";
    });
    msg.innerHTML = ""
    turnO = true;
    count = 0;
})

rstbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerHTML = ""
        box.style.pointerEvents = "auto";
        box.style.boxShadow = "10px 8px 33px 7px rgb(192, 100, 184)";
    });
    msg.innerHTML = ""
    turnO = true;
    count = 0;
})

let checkwinner = () => {
    for (let pattern of winpatrn) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        // if (pos1 != "" && pos2 != "" && pos3 != "") {
        if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
            showinner(pos1)
            return;
        }
    }
    // }

}

let showinner = (winner) => {
    msg.innerHTML = `CONGRATULATION, THE WINNER IS  ${winner}`
    disableBoxes()
}

let disableBoxes = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    });
}



