function clicked(){
    alert("oK");
}

// for(var i = 0; i <= document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", clicked);
// }

// document.querySelector(".w").addEventListener("click",()=>{
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// })
// document.querySelector(".a").addEventListener("click",()=>{
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
// })
// document.querySelector(".s").addEventListener("click",()=>{
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
// })
// document.querySelector(".d").addEventListener("click",()=>{
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
// })
// document.querySelector(".j").addEventListener("click",()=>{
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
// })
// document.querySelector(".k").addEventListener("click",()=>{
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
// })
// document.querySelector(".l").addEventListener("click",()=>{
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
// })
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       var imgClicked = this.innerHTML;
       soundPlay(imgClicked); 
       buttonAnimation(imgClicked);
});
}

document.addEventListener("keydown",function(event){
    soundPlay(event.key);
})

function soundPlay (key){
    switch(key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();   
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();  
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var tom1 = new Audio('sounds/snare.mp3');
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio('sounds/crash.mp3');
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio('sounds/kick-bass.mp3');
            tom1.play();   
            break;


        default: console.log("wrong button");
    }
    }
function buttonAnimation(currentKey){
     document.querySelector("."+currentKey).classList.add("pressed");
     setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
     },100)
}

