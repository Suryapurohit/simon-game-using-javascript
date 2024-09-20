let user_seq=[];
let game_seq=[];
let btns=["yellow","green","red","purple"];
let level=0;
let h2=document.querySelector("h2");
let score=[];

let started=false;
document.addEventListener("keypress",function () {
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
        
    }    
})
function btnflash(btn){
    btn.classList.add("flash");
    setInterval(function(){
        btn.classList.remove("flash")
    },500);
}
// function userflash(btn){
//     btn.classList.add("userflash");
//     setInterval(function(){
//         btn.classList.remove("userflash")
//     },1000);
// }
function btnpress() {
    console.log(this);
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id");
    user_seq.push(usercolor);
    console.log(user_seq);
    checkup(user_seq.length-1);

}
function levelup(){
    level++;
    h2.innerText=`level ${level}`;
    user_seq=[];

    //selecting random colour 
    let randomcolor=btns[Math.floor(Math.random()*3)];
    let btn=document.querySelector(`.${randomcolor}`);
    
    game_seq.push(randomcolor);
    console.log(game_seq);
    btnflash(btn);
}
function checkup(indx) {
    console.log("current level is ",level);
    // let indx=level-1;  
    if(user_seq[indx]===game_seq[indx]){
        if(user_seq.length==game_seq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over SCORE IS <b>${level*10}</b> <br> press any button to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },250);
        score.push(level*10);
        console.log(`highest score till now ${level*10}`);
        reset();

    }
  }
  function reset() {
    started=false;
    user_seq=[];
    game_seq=[];
    level=0;
    
  }
//addevent listner 
let presbuttons=document.querySelectorAll(".btn");
for(btn of presbuttons){
    btn.addEventListener("click",btnpress);
}
