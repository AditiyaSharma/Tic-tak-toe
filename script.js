// this is all the possibale path of the winning the tic tak toe
let winningPattern=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[1,4,7],[6,7,8],[2,5,8],[2,4,6]];
// here we are accessing all the 9 button by class name so that there traversing become eassy
let box=document.querySelectorAll(".myButton");
// from this we are asceesing the area to print the result that who won the match.
let winnerPlayer=document.querySelector("#winnerMessage");
// from this we are asceesing the reset button to provide the reset functionality.
let resetbtn=document.querySelector("#rstbtn");
// from this we are asceesing the new Game button to provide the new game functionality and it will ge enable either when some eone won or draw the match.
let newbtn=document.querySelector("#newGame");
// This is the Container for winnerMessage or draw message.
let winnerContainer=document.querySelector(".winner-container");
// this is to find the whose ture is this either X or 0
let turn=true;
// This for to find the either is match is draw or not.
let count=0;
// here on click we just point the text according to the turn and while doing so we check at any point of time is any one won the match or not.
box.forEach((myButton)=>{
    myButton.addEventListener(("click"),()=>{
        if(turn)
        {
            myButton.classList.add("Xcolor");
            myButton.innerText="X";  
            turn=false;
        }
        else{
            myButton.classList.add("Ocolor");
            myButton.innerText="O";
            turn=true;
        }
        // this disabled btn is because once the button is clicked then it can't be change  it is just permanent
        myButton.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner)
            draw();
    });
});
// this is the draw functionality it will occur when both don't won the match.
const draw=()=>{
    // print the text on scree that this match is draw
    winnerPlayer.innerText=`Match is Draw `;
    // it will remove the hide class i.e already define in the css file so that when any one won the game will down  it will be accessible when we scroll
    winnerContainer.classList.remove("hide");
}
// this is the reset functionality
const resetGame=()=>{
    turn=true;
    count=0;
    winnerContainer.classList.add("hide");
    enableBtn();
}
// this is functionality is important because once a player is click one button than it can't be change so we are disable that button at that point of time untill the game is over.
// and also we remove all the text that we used previously.
const enableBtn=()=>{
    for(let btn of box)
    {
        btn.disabled=false;
        btn.innerText="";
    }

}
// this is functionality is important because once a player is click one button than it can't be change so we are disable that button at that point of time untill the game is over.
// and also we remove all the text that we used previously.
const disablebtn=()=>{
    for(let btn of box)
        btn.disabled=true;
}
// this functionality will show which player won the match during that we remove the hide class while doing so that it can be easily to the player to do so.
const showWinner=(winner)=>{
    winnerPlayer.innerText=`Congratulations for your Winning ${winner}`;
    disablebtn();
    winnerContainer.classList.remove("hide");
}
// this is the logical part from where we checking that any player is won or not
const checkWinner=()=>{
    // here we are traversing all the possible winning condition at any point of time if ir hit any any player.
    for( let pat of winningPattern)
    {
        // here we are accessig the text that is present on any every button 
        let pattern1=box[pat[0]].innerText;
        let pattern2=box[pat[1]].innerText;
        let pattern3=box[pat[2]].innerText;
        // here we are checking if any button not having null or not
        if(pattern1!=="" && pattern2!=="" && pattern3!=="")
        {
            // once it follow that condition then we check if that all the text must be same.
            if(pattern1===pattern2 && pattern2=== pattern3)
            {
                showWinner(pattern1);
                return true;
            }
        }
    }
}
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);