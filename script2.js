let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector(".newgame");
let resetBtn = document.querySelector(".resetBtn");
let result = document.querySelector(".para");
let winner = document.querySelector(".underPara");


let click = true;
boxes.forEach((box) => {             // assining the user input in the boxes
  box.addEventListener("click", () => {
    if (click == true) {
      box.innerHTML = "X";
      click = false;
    } else {
      box.innerHTML = "O";
      click = true;
    }
    box.disabled = true;
    checkPattern();
  });
});


resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
});


let winingPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function checkPattern() {
  winingPatterns.forEach((positions) => {
    let Position1 = boxes[positions[0]].innerHTML;
    let Position2 = boxes[positions[1]].innerHTML;
    let Position3 = boxes[positions[2]].innerHTML;

    if(Position1 !="" && Position2 !="" && Position3!=""){
        console.log(Position1,Position2,Position3);
        if (Position1 === Position2 && Position2 === Position3) {
            console.log(Position1);
            showResult(Position1);
        }
    }
  });
}

function showResult(value){
    winner.innerHTML = value;
    result.style.visibility = "visible";
    result.style.opacity = "1";
    result.style.transform = "scale(1.3)";
    boxes.forEach((box)=>{
        box.disabled = true;
    })
    newBtn.style.display = "block";
    setTimeout(()=>{
        result.style.visibility = "hidden";
        result.style.opacity = "0";
        result.style.transform = "scale(0)";
    },4000);

}


newBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false;
    })
    newBtn.style.display = "none";
})
