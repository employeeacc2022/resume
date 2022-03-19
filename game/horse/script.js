alert("Press space to jump.");

const horse = document.getElementById("horse");
const wall = document.getElementById("wall");
const bird = document.getElementById("bird");
const coin = document.getElementById("coin");
// const bank = document.getElementById("bank");

// document.addEventListener("keydown", function(event){
//     jump();
// })



function jump () {
    if (horse.classList != "jump"){
       
        horse.classList.add("jump")
    }
    setTimeout( function(){
        horse.classList.remove("jump")        
    }, 500)
    
}


function coinFall () {

    if (coin.classList != "coinFall"){
       
        coin.classList.add("coinFall")
    }
    setTimeout( function(){
        coin.classList.remove("coinFall")        
    }, 2000)
    
}


tempFun = function() {
    
    let horseTop = parseInt(window.getComputedStyle(horse).getPropertyValue("top"));
    let wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue("left"));
    // let horseLeft = parseInt(window.getComputedStyle(horse).getPropertyValue("left"));

    // console.log(wallLeft)
    // console.log(horseLeft) 

    if (wallLeft < 20 && wallLeft > 0 && horseTop > 40){
        
        alert("GAME OVER !!!")
        
    }
    else if (wallLeft < 5 && wallLeft > 0){
        
        coinFall();
        
    }

    if (wallLeft < 60){
        
        //jump();
        
    }

}


let isAlive = setInterval(tempFun, 10)


function tempFunBirdFly (){

bird.classList.remove("birdFall")
document.getElementById('bird').style.left = 560 + 'px';
bird.classList.add("birdFly")

}


bird.onclick = function(event) {

    var audio = new Audio('dot.wav');
    audio.play();
    
    let birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
    //console.log(birdLeft)
    document.getElementById('bird').style.left = birdLeft + 'px';
    bird.classList.remove("birdFly") 
    bird.classList.add("birdFall")
       
}

let isAlive3 = setInterval(tempFunBirdFly, 10)



window.onkeydown = function move_left(){
    
    // Управление прицелом "dot" стрелками
     
    // Начальное положение
    // var left = 500;
    // var top1 = -350;

	// if(event.keyCode==37){
	// 	left=left-10;
	// 	document.getElementById('dot').style.left = left + 'px';
	// }
    // else if(event.keyCode==39){
    //     left=left+10;
    //     document.getElementById('dot').style.left = left + 'px';
    // }

    // if(event.keyCode==38){
    //     top1=top1-10;
    //     document.getElementById('dot').style.top = top1 + 'px';
    // }

    // if(event.keyCode==40){
    //     top1=top1+10;
    //     document.getElementById('dot').style.top = top1 + 'px';
    // }

    // Прыжок лошади при нажатии кнопки пробел
    if(event.keyCode==32){
        jump();
     }

};


// // Управление прицелом "dot" мышью, 25 - смещение к центру прицела
// document.addEventListener('mousemove', e => {
//     dot.style.left = e.pageX -25 + "px";
//     dot.style.top = e.pageY -25 + "px";
// });