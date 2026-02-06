let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");

let turn0=true;

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [0,3,6],
  [2,4,6]
];


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");
    if (turn0){
        box.innerText="O";
        box.classList.add("text0");

        turn0=false
    } else {
        box.innerText="X";
        box.classList.add("textx");
        turn0=true;
    }
    box.disabled = true;
    checkWinner (boxes);
  });
});

const checkWinner = (boxes) => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
      }
    }
  }
};

