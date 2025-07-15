let boxes =document.querySelectorAll(".box");
let rset =document.querySelector("#rset");
let newbt = document.querySelector("#newbt");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//player x , playerO


const winpatterns = [
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // col 1
    [1, 4, 7], // col 2
    [2, 5, 8], // col 3
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
];



const rsetgame =() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.classList.add("O");
            turnO=false;
        } else{
            box.innerText="X";
            box.classList.add("X");
            turnO =true;
        }
        box.disabled = true;


        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disable=true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disable=false;
        box.innerText = "";
        box.classList.remove("X");
        box.classList.remove("O");
    }
};

const showWinner =(Winner)=>{
    msg.innerText = `congratulations , Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
    
const checkWinner=() =>{
    for ( let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log( 
            boxes [pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner" , pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newbt.addEventListener("click", rsetgame);
rset.addEventListener("click", rsetgame);

