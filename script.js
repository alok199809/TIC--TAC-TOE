let boxes = document.querySelectorAll(".box")
let msg = document.querySelector(".msg")
let rstbtn = document.getElementById("rstbtn")
let newbtn = document.getElementById("newbtn")

let turnO = true;
let count = 0;

let winpatern = [
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
    box.addEventListener("click", ()=>{
        if(box.innerHTML !== "") return;
            if(turnO){
                box.innerHTML = "O"
                box.style.boxShadow = "inset 10px 8px 33px 7px rgb(192, 100, 184)";
                turnO = false;
            }else{
                box.innerHTML = "X"
                box.style.boxShadow = "inset 10px 8px 33px 7px rgb(192, 100, 184)";
                turnO = true; 
        }
        count ++;

        let iswiner = checkwiner()
        if(count === 9 && !iswiner){
            msg.innerHTML = "GAME WAS DRAW"
        }
    })
});

let checkwiner = () =>{
    for (const pattern of winpatern) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if(pos1 !== "" && pos1 === pos2 && pos2 === pos3){
            showiner(pos1)
            return true;
        }
    }
    return false;
}

let showiner = (winner) =>{
     msg.innerHTML = `CONGRATULATION WINNER IS "${winner}"`
     disablebox()
     turnO = true;
}

let disablebox = () =>{
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    });
}

newbtn.addEventListener("click", () =>{
    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.pointerEvents = "auto"
        box.style.boxShadow = "10px 8px 33px 7px rgb(107, 56, 158)";
    });
    turnO = true;
    msg.innerHTML = "";
    count = 0;
})

rstbtn.addEventListener("click", () =>{
    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.pointerEvents = "auto"
        box.style.boxShadow = "10px 8px 33px 7px rgb(107, 56, 158)";
    });
    msg.innerHTML = "";
    turnO = true;
    count = 0;
})