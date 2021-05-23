let p1 ={
    score:0,
    button:document.querySelector("#p1Button"),
    display:document.querySelector("#p1Display")
}
let p2 ={
    score:0,
    button:document.querySelector("#p2Button"),
    display:document.querySelector("#p2Display")
}
const reset = document.querySelector("#reset")
const selectScore =document.querySelector("#selectWinningScore")

let winningScore = 3;
let isGameOver = false;


selectScore.addEventListener("change",()=>{
    winningScore = parseInt(selectScore.value);
    resetScore()
})

function playerScore(player,oppent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add("has-text-success")
            oppent.display.classList.add("has-text-danger")
            player.button.disabled =true;
            oppent.button.disabled =true;

        }    
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener("click",()=>{
    playerScore(p1,p2)
})


p2.button.addEventListener("click",()=>{
    playerScore(p2,p1)
})

reset.addEventListener("click", resetScore)

function resetScore (){
    isGameOver = false;
    for(p of [p1,p2]){
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove("has-text-success", "has-text-danger")
        p.button.disabled =false;

    }
}

