var speedCount = 0;
var birdFlyWaySpeedValue;
var GlobalCurrGunLeft;
var GlobalCurrGunTop;
var GlobalTotalShoots = 0;
confirm('Use Left and Right button to move the dot. Press space for fire')
BirdFly();


function BirdFly (){

    // Обнуление креста после попадания
    document.getElementById('birdBlood').style.left = '0px';
    document.getElementById('birdBlood').style.top = '0px';
    document.getElementById('birdBlood').style.width = '0px';
    document.getElementById('birdBlood').style.height = '0px';
    document.getElementById('birdBlood').style.backgroundSize = '0px 0px';

    let randomTop = Math.floor(Math.random()*400)
    document.getElementById('bird').style.top = randomTop + 'px';

    if (speedCount === 0){ 

        levelAlert.classList.add('levelAlert1')    

        bird.classList.remove("birdBlood")
        const birdFlyWaySpeed = ['birdFlyRightSpeed8', 'birdFlyLeftSpeed8']
        birdFlyWaySpeedValue = birdFlyWaySpeed[Math.floor(Math.random()*2)]
        bird.classList.add(birdFlyWaySpeedValue)
    }

    if (speedCount === 1){

        levelAlert.classList.add('levelAlert2')

        bird.classList.remove("birdBlood")
        const birdFlyWaySpeed = ['birdFlyRightSpeed4', 'birdFlyLeftSpeed4']
        birdFlyWaySpeedValue = birdFlyWaySpeed[Math.floor(Math.random()*2)]
        bird.classList.add(birdFlyWaySpeedValue)
    }

    if (speedCount === 2){

        levelAlert.classList.add('levelAlert3')

        bird.classList.remove("birdBlood")
        const birdFlyWaySpeed = ['birdFlyRightSpeed2', 'birdFlyLeftSpeed2']
        birdFlyWaySpeedValue = birdFlyWaySpeed[Math.floor(Math.random()*2)]
        bird.classList.add(birdFlyWaySpeedValue)
    }

    if (speedCount === 3){

        levelAlert.classList.add('levelAlert4')
        
        bird.classList.remove("birdBlood")
        const birdFlyWaySpeed = ['birdFlyRightSpeed1', 'birdFlyLeftSpeed1']
        birdFlyWaySpeedValue = birdFlyWaySpeed[Math.floor(Math.random()*2)]
        bird.classList.add(birdFlyWaySpeedValue)
    }

}


// При приближении к границам объект меняет свою высоту и направление
function changeBirdStyle (){
 
    let birdCurrLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"))
    
    //console.log(birdCurrLeft)
    // console.log(birdFlyWaySpeedValue)
    
    if (birdCurrLeft > 650){
    
        let randomTop = Math.floor(Math.random()*400)
        document.getElementById('bird').style.top = randomTop + 'px';

        bird.classList.remove("birdFlyRightSpeed8")
        bird.classList.remove("birdFlyRightSpeed4")
        bird.classList.remove("birdFlyRightSpeed2")
        bird.classList.remove("birdFlyRightSpeed1")

        if (speedCount === 0) {
            
            birdFlyWaySpeedValue = "birdFlyLeftSpeed8";            
            bird.classList.add(birdFlyWaySpeedValue)
            //console.log(birdFlyWaySpeedValue)
        }
        if (speedCount === 1) {
            
            birdFlyWaySpeedValue = "birdFlyLeftSpeed4";            
            bird.classList.add(birdFlyWaySpeedValue)
            //console.log(birdFlyWaySpeedValue)
        }
        if (speedCount === 2) {
            
            birdFlyWaySpeedValue = "birdFlyLeftSpeed2";            
            bird.classList.add(birdFlyWaySpeedValue)
            //console.log(birdFlyWaySpeedValue)
        }
        if (speedCount === 3) {
            
            birdFlyWaySpeedValue = "birdFlyLeftSpeed1";            
            bird.classList.add(birdFlyWaySpeedValue)
            //console.log(birdFlyWaySpeedValue)
        }

    }

    if (birdCurrLeft < -5){
    
        let randomTop = Math.floor(Math.random()*400)
        document.getElementById('bird').style.top = randomTop + 'px';

        bird.classList.remove("birdFlyLeftSpeed8")
        bird.classList.remove("birdFlyLeftSpeed4")
        bird.classList.remove("birdFlyLeftSpeed2")
        bird.classList.remove("birdFlyLeftSpeed1")

        if (speedCount === 0) {
            
            birdFlyWaySpeedValue = "birdFlyRightSpeed8";            
            bird.classList.add(birdFlyWaySpeedValue)    
            //console.log(birdFlyWaySpeedValue)        
        }
        if (speedCount === 1) {
            
            birdFlyWaySpeedValue = "birdFlyRightSpeed4";            
            bird.classList.add(birdFlyWaySpeedValue)
            //console.log(birdFlyWaySpeedValue)
        }
        if (speedCount === 2) {
            
            birdFlyWaySpeedValue = "birdFlyRightSpeed2";            
            bird.classList.add(birdFlyWaySpeedValue)
            //console.log(birdFlyWaySpeedValue)
        }
        if (speedCount === 3) {
            
            birdFlyWaySpeedValue = "birdFlyRightSpeed1";            
            bird.classList.add(birdFlyWaySpeedValue)
            //console.log(birdFlyWaySpeedValue)
        }

    }
                  
        // Обнуление снаряда при достижение верхней точки
        if (parseInt(window.getComputedStyle(gun).getPropertyValue("top"))< -50){
            gun.style.animation = "";    
        }

        // Сравнение координат снаряда и птицы
        let currentBirdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        let currentBirdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
        let currentGunTop = parseInt(window.getComputedStyle(gun).getPropertyValue("top"));
        let currentGunLeft = parseInt(window.getComputedStyle(gun).getPropertyValue("left"));
         
        // Берем значение по модулю для расчета сближения
        if (
            ((Math.abs(currentGunLeft - currentBirdLeft) < 20) || (Math.abs(currentBirdLeft - currentGunLeft) < 20))
             &&
            ((Math.abs(currentBirdTop - currentGunTop) < 20) || (Math.abs(currentGunTop - currentBirdTop) < 20 ))
        ){
              //alert("YOU KILL LITLE BIRD")  
              //console.log(Math.abs(currentGunTop - currentBirdTop))
              //console.log(Math.abs(currentBirdTop - currentGunTop))
              //console.log(currentGunLeft)
              //console.log(currentBirdLeft)

              // Обнуление снаряда при достижение цели
              GlobalCurrGunLeft = parseInt(window.getComputedStyle(gun).getPropertyValue("left"));
              GlobalCurrGunTop = parseInt(window.getComputedStyle(gun).getPropertyValue("top"));
              
              gun.style.animation = "";
              document.getElementById('gun').style.top = '350px';
              document.getElementById('gun').style.left = '320px';

              birdFired();
        }



}

// Запуск ф-и "changeBirdStyle" 100 раз в секунду
let isAlive = setInterval(changeBirdStyle, 10)


function birdFired(){

    // var audio = new Audio('img/dot.wav');
    // audio.play();    

    // Обнуление передвижения птицы
    bird.classList.remove("birdFlyRightSpeed8")
    bird.classList.remove("birdFlyRightSpeed4")
    bird.classList.remove("birdFlyRightSpeed2")
    bird.classList.remove("birdFlyRightSpeed1")
    bird.classList.remove("birdFlyLeftSpeed8")
    bird.classList.remove("birdFlyLeftSpeed4")
    bird.classList.remove("birdFlyLeftSpeed2")
    bird.classList.remove("birdFlyLeftSpeed1")  

    // Замена картинки птицы на крест с присвоением положения снаряда в момент попадания 
    document.getElementById('birdBlood').style.left = GlobalCurrGunLeft + 'px';
    document.getElementById('birdBlood').style.top = GlobalCurrGunTop - 60 + 'px';
    document.getElementById('birdBlood').style.width = '60px';
    document.getElementById('birdBlood').style.height = '60px';
    document.getElementById('birdBlood').style.backgroundSize = '60px 60px';

    speedCount++;
    //console.log(speedCount)
    
    if (speedCount > 3)
    {
        speedCount = 0;
        
        // Обнуление передвижения птицы
        bird.classList.remove("birdFlyRightSpeed8")
        bird.classList.remove("birdFlyRightSpeed4")
        bird.classList.remove("birdFlyRightSpeed2")
        bird.classList.remove("birdFlyRightSpeed1")
        bird.classList.remove("birdFlyLeftSpeed8")
        bird.classList.remove("birdFlyLeftSpeed4")
        bird.classList.remove("birdFlyLeftSpeed2")
        bird.classList.remove("birdFlyLeftSpeed1")     

        // Обнуление счетчика уровней
        levelAlert.classList.remove('levelAlert1')
        levelAlert.classList.remove('levelAlert2')
        levelAlert.classList.remove('levelAlert3')
        levelAlert.classList.remove('levelAlert4')
        
        confirm('Game over. You used ' + GlobalTotalShoots + ' fires to kill 4 birds')
                   
    }

    let timerId = setTimeout(BirdFly, 1000)
     
}


window.onkeydown = function gunMovement(){
 
    // Управление объектом стрелками
    // Начальное положение
    let gunMovementLeft = parseInt(window.getComputedStyle(gun).getPropertyValue("left"));
    let gunMovementTop = parseInt(window.getComputedStyle(gun).getPropertyValue("top"));
    //console.log(gunMovementLeft)

	if(event.keyCode==37){
		gunMovementLeft = gunMovementLeft - 20;
		document.getElementById('gun').style.left = gunMovementLeft + 'px';
	}
    if(event.keyCode == 39){
        gunMovementLeft=gunMovementLeft + 20;
        document.getElementById('gun').style.left = gunMovementLeft + 'px';
    }
    if(event.keyCode == 32){
         
        gun.style.animation = "gunFire 0.5s linear";   
        // Счетчик выстрелов
        GlobalTotalShoots++;
    }
    // if(event.keyCode == 40){
    //     gunMovementTop=gunMovementTop + 20;
    //     document.getElementById('gun').style.top = gunMovementTop + 'px';
    // }
    // if(event.keyCode == 38){
    //     gunMovementTop=gunMovementTop - 20;
    //     document.getElementById('gun').style.top = gunMovementTop + 'px';
    // }

};







// var audioKryakva = new Audio('img/kryakva.mp3');
// audioKryakva.play();

// var audio2 = new Audio('img/dot.wav');
// audio2.play();

// let birdCurrAnimation = parseInt(window.getComputedStyle(bird).getPropertyValue("animation"))
// console.log(birdCurrAnimation)

// bird.classList.add(birdFlyWaySpeed[Math.floor(Math.random()*8)])

// const birdFlyWaySpeed =[
//     'birdFlyRightSpeed8',
//     'birdFlyLeftSpeed8',
//     'birdFlyRightSpeed4',
//     'birdFlyLeftSpeed4',
//     'birdFlyRightSpeed2',
//     'birdFlyLeftSpeed2',
//     'birdFlyRightSpeed1',
//     'birdFlyLeftSpeed1'
// ]

// Управление картинкой-прицелом "dot" мышью, 25 - смещение к центру прицела
// document.addEventListener('mousemove', e => {
//     dot.style.left = e.pageX -125 + "px";
//     dot.style.top = e.pageY -125 + "px";
// });

// Выод координат объекта на самом объекте
// document.getElementById("bird").innerHTML = `${currentBirdLeft} || ${currentBirdTop}`;
// document.getElementById("gun").innerHTML = `${currentGunLeft} || ${currentGunTop}`;

// Варианты обращения к CSS
// Добавляет кусок параметров "birdFlyRightSpeed8" к объекту
//bird.classList.add("birdFlyRightSpeed8")
// Записывает !строку! в значение "animation"
//document.getElementById('bird').style.animation = "birdMoveLeft 1s infinite linear";
//bird.style.animation = "birdMoveLeft 1s infinite linear";

// При клике мышкой по объекту запускается ф-я
// bird.onclick = function(event) {}