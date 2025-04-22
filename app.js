let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".container-msg");
let msg=document.querySelector("#msg");


let turnO=true;//


const winpatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
const resetGame=()=>{
  turnO=true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => { 
  box.addEventListener("click",() => {
    console.log("box was clicked");
    if(turnO){
      box.innerText="O";
      turnO=false;
    }else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;

    checkWinner();
  });
});
const disableBoxes = ()=>
{
  for(let box of boxes){
    box.disabled=true;
  }
};

  const enableBoxes = ()=>
    {
      for(let box of boxes){
        box.disabled=false;
        box.innerText=""; 
      }
    };

let scoreX = 0;
let scoreO = 0;

const updateScore = (winner) => {
  if (winner === "X") {
    scoreX++;
    document.getElementById("scoreX").innerText = scoreX;
  } else if (winner === "O") {
    scoreO++;
    document.getElementById("scoreO").innerText = scoreO;
  }
};
const showWinner = (winner) => {
  console.log("Winner passed to showWinner:",winner);
  msg.innerText=`Congratulations,Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  updateScore(winner);
  disableBoxes();
};


const checkWinner=()=>{
  for(let pattern of winpatterns){   
     let pos1= boxes[pattern[0]].innerText;
     let pos2= boxes[pattern[1]].innerText;
     let pos3= boxes[pattern[2]].innerText;

     if(pos1!=""&& pos2!=""&& pos3!=""){
      if(pos1 ===  pos2 && pos2 === pos3){
        console.log("winner found:"+pos1);
        showWinner(pos1);
        return;
      }
     }
   }
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

