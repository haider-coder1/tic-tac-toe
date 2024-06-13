let boxs=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn")
let newGameBtn=document.querySelector("#new-btn")
let msgCont=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO= true;

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
 const resetGame=()=>{
    turnO=true;
    enableboxs();
    msgCont.classList.add("hide")
    boxs.forEach(box=>{
        box.innerText = ""
    })

 }

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
       
    if(turnO){
        box.innerText="O"
        turnO=false;
    }else{
        box.innerText="X"
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
    })
})

const disableboxs   =()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}

const enableboxs   =()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerTex="";
    }
}
  const showWinner=(winner)=>{
  msg.innerTex=`Conuratulation Winner is ${winner}`
  msgCont.classList.remove("hide")
  disableboxs();
  
  }

const checkWinner=()=>{
    for (pattern of winPatterns){
       let posVal1=boxs[pattern[0]].innerText;
       let posVal2=boxs[pattern[1]].innerText;
       let posVal3=boxs[pattern[2]].innerText;
       
       if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
        if(posVal1 === posVal2 && posVal2 === posVal3){
          
            showWinner(posVal1);
        }
       }

    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)  