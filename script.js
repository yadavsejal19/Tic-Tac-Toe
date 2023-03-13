//let sejal_pl1=prompt("Enter Name of Player one ");
//let sejal_pl2=prompt("Enter Name of Player secound ");

let sejal_turn = "X"
let sejal_isgameover = false;

//  change the turn
const changeTurn = ()=>{
    return sejal_turn === "X"? "O": "X"
}
//  a win
const checkWin = ()=>{
    let sejal = document.getElementsByClassName('sejal');
    let sejal_wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    sejal_wins.forEach(e =>{
        if((sejal[e[0]].innerText === sejal[e[1]].innerText) && (sejal[e[2]].innerText === sejal[e[1]].innerText) && (sejal[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = "Player " + sejal[e[0]].innerText + " Won !!! "
            
            sejal_isgameover = true
        
        }
    })
}

//  Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let sejal = element.querySelector('.sejal');
    element.addEventListener('click', ()=>{
        if(sejal.innerText === ''){
            sejal.innerText = sejal_turn;
            sejal_turn = changeTurn();
                         checkWin();
            if (!sejal_isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + sejal_turn;
            } 
        }
    })
})

// reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.sejal');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
     sejal_turn = "X"; 
     sejal_isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + sejal_turn;
    
})



