let gameSeq = [];
let userSeq = [];

let btns = ['red','yellow','green','purple'];

let started = false;
let level = 0;

let highestScore = 0;

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

document.addEventListener('keypress',function(){
   if(started == false){
   console.log('game is started');
   started = true;
   }
   levelUp();
    
});

function gameFlash(btn){
    btn.classList.add('gameFlash');
    setTimeout(function(){
        btn.classList.remove('gameFlash');
    },250)
};

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },250)
};



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}
function checkAns(index){
    // console.log("curr level :",level);

   
    if(gameSeq[index] == userSeq[index]){
        // console.log('same');
        if (gameSeq.length == userSeq.length){
        setTimeout(levelUp,1000);}
        
    }
    else{

        if(level > highestScore){
            highestScore = level;
}
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br>Highest Score: <b>${highestScore}</b><br>Press any key to start again.`;

        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }

}

function btnPress(){
    console.log("pressed", this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}