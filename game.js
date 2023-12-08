
let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");

let resetGameBtn = document.querySelector("#reset-btn");

let msg = document.querySelector("#winner");
let msgContainer = document.querySelector(".msg-container");

let truno = true;
let count =0;


const winnerPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function  resetGame(){
    truno = true;
    count =0;
    enableBoxs();
    msgContainer.classList.add("hide")
    
    
}

function enableBoxs(){
    
    for (box of boxes) {
    box.innerHTML="";
    box.style.color = "";
  box.disabled= false;
        
    }
}



function  disabledBoxes(){
    for ( box of boxes) {
        box.disabled= true;   
    }
}

boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        
        if (truno===true) {
        
        box.innerHTML="0";
        
            truno = false;
        }
        
        else{
            box.innerHTML="x";
            box.style.color="#ff5574";
            truno = true;
        }
        box.disabled = true;
      let a =   count++;
         console.log(a)
       let isWinner = checkwinner();
       if (count === 9 && !isWinner) {
      gameDraw();
    }
    
    }) 
})

function gameDraw(){
  msg.innerText = `Game was a Draw.`; msgContainer.classList.remove("hide");
  disabledBoxes();
}



function checkwinner(){
    for(let pattern of winnerPatterns){
       
       
let pos1Val = boxes [pattern[0]].innerText;
let pos2Val = boxes [pattern[1]].innerText;
let pos3Val = boxes[pattern [2]].innerText;
       
       if (pos1Val !="" &&  pos2Val !="" &&  pos3Val !=""   ) {
           
           if (pos1Val=== pos2Val &&  pos2Val === pos3Val ) {
        showWinner(pos1Val);
         return true;
               
           }
          
         
       }
    }
}

function  showWinner(winner){ msgContainer.classList.remove("hide");       msg.innerHTML=`congratulations , winner is ${winner}`;
    disabledBoxes();
    
}


    

newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);
