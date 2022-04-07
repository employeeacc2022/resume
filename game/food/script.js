var globalBirdStyleCount = 0;

var globalFoodPlaceLeft = 0;
var globalFoodPlaceTop = 0;

var globalBirdPlaceLeft = 0;
var globalBirdPlaceTop = 0;

// Еда
var globalFoodPlaceLeft = 0;
var globalFoodPlaceTop = 0;
var globalBirdKidsPlaceLeft = 0;
var globalBirdKidsPlaceTop = 0;

// Пластик
var globalPlasticBottleLeft = 0;
var globalPlasticBottleTop = 0;
var globalTrashPlasticPlaceLeft = 0;
var globalTrashPlasticPlaceTop = 0;

// Бумага
var globalPaperLeft = 0;
var globalPaperTop = 0;
var globalPaperPlaceLeft = 0;
var globalPaperPlaceTop = 0;

// Стекло
var globalGlassBottleLeft = 0;
var globalGlassBottleTop = 0;
var globalTrashGlassPlaceLeft = 0;
var globalTrashGlassPlaceTop = 0;

var globalBirdStartPlaceLeft = 0;
var globalBirdStartPlaceTop = 0;


// Тип объекта food, plastic, metal ...
var globalCurrObject;

var currentWayY = 0;
var currentWayX = 0;

// var globalMouseCorY = 0;
// var globalMouseCorX = 0;

bird.style.top = '111px';
bird.style.left = '47px';

food.style.top = '20px';
food.style.left = '182px';

alert("Please move the following objects (bottle, paper, plastic & jim) under the green line. You can move containers and birds house at any place above green line.");

// Запуск ф-и "changeBirdStyle" 100 раз в секунду
function changeBirdStyle (){

    funCurrPlace()
    //console.log(globalBirdStyleCount)

    if (globalBirdStyleCount === 0 ){

        food.classList.remove("birdFlyToCorXY")
        bird.classList.remove("birdFlyCircleXY")
        bird.classList.remove("foodFlyCircleXY")
        bird.classList.remove("foodFlyToCorXY")

        funBirdFoodScan()

    }

    if (globalBirdStyleCount === 1 ){

        // // Эти параметры устанавливают птицу основным объектом над другими
        // bird = document.getElementById('bird');
        // bird.style.position = 'absolute';
        // bird.style.zIndex = 1000;
        // document.body.append(bird);

        funBirdMoveToFood();

    }

    if (globalBirdStyleCount === 2 ){

        funBirdMoveToKids()
        funFoodMoveToKids()

    }


    if (globalBirdStyleCount === 3 ){

        funBirdMoveBack()

    }

    if (globalBirdStyleCount > 3){
        
        globalBirdStyleCount = 0
        globalCurrObject = "";
        alert("I'm ready for the next task.");
    
    }
    
}

let isAlive = setInterval(changeBirdStyle, 10)


function funCurrPlace(){

    globalBirdPlaceLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
    globalBirdPlaceTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    globalFoodPlaceLeft = parseInt(window.getComputedStyle(food).getPropertyValue("left"));
    globalFoodPlaceTop = parseInt(window.getComputedStyle(food).getPropertyValue("top"));
    globalBirdKidsPlaceLeft = parseInt(window.getComputedStyle(birdKids).getPropertyValue("left"));
    globalBirdKidsPlaceTop = parseInt(window.getComputedStyle(birdKids).getPropertyValue("top"));

    globalPlasticBottleLeft = parseInt(window.getComputedStyle(plastic).getPropertyValue("left"));
    globalPlasticBottleTop = parseInt(window.getComputedStyle(plastic).getPropertyValue("top"));
    globalTrashPlasticPlaceLeft = parseInt(window.getComputedStyle(trashPlastic).getPropertyValue("left"));
    globalTrashPlasticPlaceTop = parseInt(window.getComputedStyle(trashPlastic).getPropertyValue("top"));

    globalPaperLeft = parseInt(window.getComputedStyle(paper).getPropertyValue("left"));
    globalPaperTop = parseInt(window.getComputedStyle(paper).getPropertyValue("top"));
    globalPaperPlaceLeft = parseInt(window.getComputedStyle(trashPaper).getPropertyValue("left"));
    globalPaperPlaceTop = parseInt(window.getComputedStyle(trashPaper).getPropertyValue("top"));

    globalGlassBottleLeft = parseInt(window.getComputedStyle(bottle).getPropertyValue("left"));
    globalGlassBottleTop = parseInt(window.getComputedStyle(bottle).getPropertyValue("top"));
    globalTrashGlassPlaceLeft = parseInt(window.getComputedStyle(trashGlass).getPropertyValue("left"));
    globalTrashGlassPlaceTop = parseInt(window.getComputedStyle(trashGlass).getPropertyValue("top"));
 
    document.getElementById("bird").innerHTML = `${globalBirdPlaceTop} || ${globalBirdPlaceLeft}`;
    document.getElementById("birdKids").innerHTML = `${globalBirdKidsPlaceTop} || ${globalBirdKidsPlaceLeft}`;
    document.getElementById("food").innerHTML = `${globalFoodPlaceTop} || ${globalFoodPlaceLeft}`;
    document.getElementById("plastic").innerHTML = `${globalPlasticBottleTop} || ${globalPlasticBottleLeft}`;

    // document.getElementById("bird").innerHTML = globalBirdPlaceLeft;
    // document.getElementById("birdKids").innerHTML = globalBirdKidsPlaceLeft;
    // document.getElementById("food").innerHTML = globalFoodPlaceLeft;

    // console.log(globalFoodPlaceLeft)
    // console.log(globalBirdPlaceLeft)

    // console.log(bird.style.top)
    // console.log(bird.style.left)
    // console.log(globalBirdPlaceLeft)

    console.log(globalBirdStyleCount)

}


function funBirdFoodScan (){    

    // Отслеживаем положение обекта который переносит птица, если он на земле то птица летит к нему
    if (globalFoodPlaceTop > 700){        

        // Тип объекта food, plastic, metal ...
        globalCurrObject = 'food'
        
        // Чтение глобальной переменной из CSS
        var root = document.querySelector(':root')
        var rootStyles = getComputedStyle(root)
        var CurrentValueX = rootStyles.getPropertyValue('--CurrentValueX')
        
        // Запись глобальной переменной в CSS
        root.style.setProperty('--CurrentValueY', globalFoodPlaceTop + 'px')
        root.style.setProperty('--CurrentValueX', globalFoodPlaceLeft + 'px')
        root.style.setProperty('--startValueY', globalBirdPlaceTop + 'px')
        root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')
        
        // По этой переменной отслеживаем остановку объекта при достижении другого объекта
        currentWayY = globalFoodPlaceTop
        currentWayX = globalFoodPlaceLeft
        
        // Чтение и вывод
        console.log("scan -> food -> true")
        console.log("Start - food - Corr:")
        console.log(rootStyles.getPropertyValue('--CurrentValueY'))
        console.log(rootStyles.getPropertyValue('--CurrentValueX'))
        console.log(rootStyles.getPropertyValue('--startValueY'))
        console.log(rootStyles.getPropertyValue('--startValueX'))
    
        globalBirdStyleCount = 1

        // Запоминаем начальное положение птицы, чтобы в конце всех событий вернуть ее на прежнее место
        globalBirdStartPlaceTop = globalBirdPlaceTop;
        globalBirdStartPlaceLeft = globalBirdPlaceLeft;

        // Устанавливаем направление движения птицы для выбора картинки (left/right)
        if (globalFoodPlaceLeft - globalBirdPlaceLeft > 0) {

            //bird.style.backgroundImage = 'img/bird_right.gif' - тут не работает
            document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

        }
        
        if (globalFoodPlaceLeft - globalBirdPlaceLeft < 0) {

            //bird.style.backgroundImage = 'img/bird_left.gif' - тут не работает
            document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
        }
        
    }    


    if (globalPlasticBottleTop > 700){

        // Тип объекта food, plastic, metal ...
        globalCurrObject = 'plastic'
        
        // Чтение глобальной переменной из CSS
        var root = document.querySelector(':root')
        var rootStyles = getComputedStyle(root)
        var CurrentValueX = rootStyles.getPropertyValue('--CurrentValueX')
        
        // Запись глобальной переменной в CSS
        root.style.setProperty('--CurrentValueY', globalPlasticBottleTop + 'px')
        root.style.setProperty('--CurrentValueX', globalPlasticBottleLeft + 'px')
        root.style.setProperty('--startValueY', globalBirdPlaceTop + 'px')
        root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')
        
        // По этой переменной отслеживаем остановку объекта при достижении другого объекта
        currentWayY = globalPlasticBottleTop
        currentWayX = globalPlasticBottleLeft
        
        // Чтение и вывод
        console.log("scan -> plastic bottle -> true")
        console.log("Start - plastic bottle - Corr:")
        console.log(rootStyles.getPropertyValue('--CurrentValueY'))
        console.log(rootStyles.getPropertyValue('--CurrentValueX'))
        console.log(rootStyles.getPropertyValue('--startValueY'))
        console.log(rootStyles.getPropertyValue('--startValueX'))
    
        globalBirdStyleCount = 1

        // Запоминаем начальное положение птицы, чтобы в конце всех событий вернуть ее на прежнее место
        globalBirdStartPlaceTop = globalBirdPlaceTop;
        globalBirdStartPlaceLeft = globalBirdPlaceLeft;

        // Устанавливаем направление движения птицы для выбора картинки (left/right)
        if (globalPlasticBottleLeft - globalBirdPlaceLeft > 0) {

            document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

        }
        
        if (globalPlasticBottleLeft - globalBirdPlaceLeft < 0) {

            document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
        }
        
    }   


    if (globalPaperTop > 700){

        // Тип объекта food, plastic, metal ...
        globalCurrObject = 'paper'
        
        // Чтение глобальной переменной из CSS
        var root = document.querySelector(':root')
        var rootStyles = getComputedStyle(root)
        var CurrentValueX = rootStyles.getPropertyValue('--CurrentValueX')
        
        // Запись глобальной переменной в CSS
        root.style.setProperty('--CurrentValueY', globalPaperTop + 'px')
        root.style.setProperty('--CurrentValueX', globalPaperLeft + 'px')
        root.style.setProperty('--startValueY', globalBirdPlaceTop + 'px')
        root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')
        
        // По этой переменной отслеживаем остановку объекта при достижении другого объекта
        currentWayY = globalPaperTop
        currentWayX = globalPaperLeft
        
        // Чтение и вывод
        console.log("scan -> paper -> true")
        console.log("Start - paper - Corr:")
        console.log(rootStyles.getPropertyValue('--CurrentValueY'))
        console.log(rootStyles.getPropertyValue('--CurrentValueX'))
        console.log(rootStyles.getPropertyValue('--startValueY'))
        console.log(rootStyles.getPropertyValue('--startValueX'))
    
        globalBirdStyleCount = 1

        // Запоминаем начальное положение птицы, чтобы в конце всех событий вернуть ее на прежнее место
        globalBirdStartPlaceTop = globalBirdPlaceTop;
        globalBirdStartPlaceLeft = globalBirdPlaceLeft;

        // Устанавливаем направление движения птицы для выбора картинки (left/right)
        if (globalPaperLeft - globalBirdPlaceLeft > 0) {

            document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

        }
        
        if (globalPaperLeft - globalBirdPlaceLeft < 0) {

            document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
        }
        
    }   


    if (globalGlassBottleTop > 700){

        // Тип объекта food, plastic, metal ...
        globalCurrObject = 'bottle'
        
        // Чтение глобальной переменной из CSS
        var root = document.querySelector(':root')
        var rootStyles = getComputedStyle(root)
        var CurrentValueX = rootStyles.getPropertyValue('--CurrentValueX')
        
        // Запись глобальной переменной в CSS
        root.style.setProperty('--CurrentValueY', globalGlassBottleTop + 'px')
        root.style.setProperty('--CurrentValueX', globalGlassBottleLeft + 'px')
        root.style.setProperty('--startValueY', globalBirdPlaceTop + 'px')
        root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')
        
        // По этой переменной отслеживаем остановку объекта при достижении другого объекта
        currentWayY = globalGlassBottleTop
        currentWayX = globalGlassBottleLeft
        
        // Чтение и вывод
        console.log("scan -> bottle -> true")
        console.log("Start - glass - Corr:")
        console.log(rootStyles.getPropertyValue('--CurrentValueY'))
        console.log(rootStyles.getPropertyValue('--CurrentValueX'))
        console.log(rootStyles.getPropertyValue('--startValueY'))
        console.log(rootStyles.getPropertyValue('--startValueX'))
    
        globalBirdStyleCount = 1

        // Запоминаем начальное положение птицы, чтобы в конце всех событий вернуть ее на прежнее место
        globalBirdStartPlaceTop = globalBirdPlaceTop;
        globalBirdStartPlaceLeft = globalBirdPlaceLeft;

        // Устанавливаем направление движения птицы для выбора картинки (left/right)
        if (globalGlassBottleLeft - globalBirdPlaceLeft > 0) {

            document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

        }
        
        if (globalGlassBottleLeft - globalBirdPlaceLeft < 0) {

            document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
        }
        
    }   
    
}


function funBirdMoveToFood (){

    bird.classList.add("birdFlyToCorXY")

    console.log("bird moving to object")
    
    // Отслеживаем момент прилета птицы к объекту
    if ( Math.abs(globalBirdPlaceLeft - currentWayX) < 40 && Math.abs(globalBirdPlaceTop - currentWayY) < 40){

  
            // Фиксируем птицу при достижении объекта
            bird.classList.remove("birdFlyToCorXY")
            bird.style.top = globalBirdPlaceTop + 'px';
            bird.style.left = globalBirdPlaceLeft + 'px';

            // Доступ к глобальным переменным CSS
            var root = document.querySelector(':root')
            var rootStyles = getComputedStyle(root)
            var CurrentValueX = rootStyles.getPropertyValue('--CurrentValueX')
            
            
            if (globalCurrObject === "food"){

                console.log("bird -> food -> true")     

                // Птица
                // Устанавливаем координаты для нового перемещения (птица - дом && обект - "дом" либо еще что-то)
                // Запись глобальной переменной в CSS
                root.style.setProperty('--CurrentValueY', globalBirdKidsPlaceTop + 'px')
                root.style.setProperty('--CurrentValueX', globalBirdKidsPlaceLeft + 'px')
                root.style.setProperty('--startValueY', globalBirdPlaceTop -50 + 'px')
                root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')

                // Чтение и вывод
                console.log("Bird - House - Corr:")
                console.log(rootStyles.getPropertyValue('--CurrentValueY'))
                console.log(rootStyles.getPropertyValue('--CurrentValueX'))
                console.log(rootStyles.getPropertyValue('--startValueY'))
                console.log(rootStyles.getPropertyValue('--startValueX'))

                // По этой переменной отслеживаем остановку объекта при достижении другого объекта
                // Так как птица и объект движутся вместе то отслеживает только по птице
                currentWayY = globalBirdKidsPlaceTop
                currentWayX = globalBirdKidsPlaceLeft

                // Переносимый объект
                // Запись глобальной переменной в CSS
                root.style.setProperty('--foodCurrentValueY', globalBirdKidsPlaceTop + 50 + 'px')
                root.style.setProperty('--foodCurrentValueX', globalBirdKidsPlaceLeft + 25 + 'px')
                root.style.setProperty('--foodstartValueY', globalBirdPlaceTop + 'px')
                root.style.setProperty('--foodstartValueX', globalBirdPlaceLeft + 'px') 

                // Чтение и вывод
                console.log("Food - house - Corr:")
                console.log(rootStyles.getPropertyValue('--foodCurrentValueY'))
                console.log(rootStyles.getPropertyValue('--foodCurrentValueX'))
                console.log(rootStyles.getPropertyValue('--foodstartValueY'))
                console.log(rootStyles.getPropertyValue('--foodstartValueX'))

                // Устанавливаем направление движения птицы для выбора картинки (left/right)
                if (globalBirdKidsPlaceLeft - globalBirdPlaceLeft > 0) {

                    document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

                }
                
                if (globalBirdKidsPlaceLeft - globalBirdPlaceLeft < 0) {

                    document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
                }
        
            }


            if (globalCurrObject === "plastic"){

                console.log("bird -> plastic -> true")

                // Птица
                // Устанавливаем координаты для нового перемещения (птица - мусорка)
                // Запись глобальной переменной в CSS
                root.style.setProperty('--CurrentValueY', globalTrashPlasticPlaceTop + 'px')
                root.style.setProperty('--CurrentValueX', globalTrashPlasticPlaceLeft + 'px')
                root.style.setProperty('--startValueY', globalBirdPlaceTop + 'px')
                root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')
        
                // Чтение и вывод
                console.log("Bird - PlasticCont - Corr:")
                console.log(rootStyles.getPropertyValue('--CurrentValueY'))
                console.log(rootStyles.getPropertyValue('--CurrentValueX'))
                console.log(rootStyles.getPropertyValue('--startValueY'))
                console.log(rootStyles.getPropertyValue('--startValueX'))
        
                // По этой переменной отслеживаем остановку объекта при достижении другого объекта
                // Так как птица и объект движутся вместе то отслеживает только по птице
                currentWayY = globalTrashPlasticPlaceTop
                currentWayX = globalTrashPlasticPlaceLeft
        
                // Переносимый объект
                // Запись глобальной переменной в CSS
                root.style.setProperty('--foodCurrentValueY', globalTrashPlasticPlaceTop + 50 + 'px')
                root.style.setProperty('--foodCurrentValueX', globalTrashPlasticPlaceLeft - 5 + 'px')
                root.style.setProperty('--foodstartValueY', globalBirdPlaceTop + 50 + 'px')
                root.style.setProperty('--foodstartValueX', globalBirdPlaceLeft - 5 + 'px') 
        
                // Чтение и вывод
                console.log("Plastic bottle - plastic container - Corr:")
                console.log(rootStyles.getPropertyValue('--foodCurrentValueY'))
                console.log(rootStyles.getPropertyValue('--foodCurrentValueX'))
                console.log(rootStyles.getPropertyValue('--foodstartValueY'))
                console.log(rootStyles.getPropertyValue('--foodstartValueX'))

                // Устанавливаем направление движения птицы для выбора картинки (left/right)
                if (globalTrashPlasticPlaceLeft - globalBirdPlaceLeft > 0) {

                    document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

                }
                
                if (globalTrashPlasticPlaceLeft - globalBirdPlaceLeft < 0) {

                    document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
                }
                
            }   
            
            
            if (globalCurrObject === "paper"){

                console.log("bird -> paper -> true")

                // Птица
                // Устанавливаем координаты для нового перемещения (птица - мусорка)
                // Запись глобальной переменной в CSS
                root.style.setProperty('--CurrentValueY', globalPaperPlaceTop + 'px')
                root.style.setProperty('--CurrentValueX', globalPaperPlaceLeft + 'px')
                root.style.setProperty('--startValueY', globalBirdPlaceTop + 'px')
                root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')
        
                // Чтение и вывод
                console.log("Bird - PaperCont - Corr:")
                console.log(rootStyles.getPropertyValue('--CurrentValueY'))
                console.log(rootStyles.getPropertyValue('--CurrentValueX'))
                console.log(rootStyles.getPropertyValue('--startValueY'))
                console.log(rootStyles.getPropertyValue('--startValueX'))
        
                // По этой переменной отслеживаем остановку объекта при достижении другого объекта
                // Так как птица и объект движутся вместе то отслеживает только по птице
                currentWayY = globalPaperPlaceTop
                currentWayX = globalPaperPlaceLeft
        
                // Переносимый объект
                // Запись глобальной переменной в CSS
                root.style.setProperty('--foodCurrentValueY', globalPaperPlaceTop + 5 + 'px')
                root.style.setProperty('--foodCurrentValueX', globalPaperPlaceLeft - 5 + 'px')
                root.style.setProperty('--foodstartValueY', globalPaperTop + 5 + 'px')
                root.style.setProperty('--foodstartValueX', globalPaperLeft - 5 + 'px') 
        
                // Чтение и вывод
                console.log("Paper - paper container - Corr:")
                console.log(rootStyles.getPropertyValue('--foodCurrentValueY'))
                console.log(rootStyles.getPropertyValue('--foodCurrentValueX'))
                console.log(rootStyles.getPropertyValue('--foodstartValueY'))
                console.log(rootStyles.getPropertyValue('--foodstartValueX'))

                // Устанавливаем направление движения птицы для выбора картинки (left/right)
                if (globalPaperPlaceLeft - globalBirdPlaceLeft > 0) {

                    document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

                }
                
                if (globalPaperPlaceLeft - globalBirdPlaceLeft < 0) {

                    document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
                }
                
            }


            if (globalCurrObject === "bottle"){

                console.log("bird -> bottle -> true")

                // Птица
                // Устанавливаем координаты для нового перемещения (птица - мусорка)
                // Запись глобальной переменной в CSS
                root.style.setProperty('--CurrentValueY', globalTrashGlassPlaceTop + 'px')
                root.style.setProperty('--CurrentValueX', globalTrashGlassPlaceLeft + 'px')
                root.style.setProperty('--startValueY', globalBirdPlaceTop + 'px')
                root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')
        
                // Чтение и вывод
                console.log("Bird - GlassCont - Corr:")
                console.log(rootStyles.getPropertyValue('--CurrentValueY'))
                console.log(rootStyles.getPropertyValue('--CurrentValueX'))
                console.log(rootStyles.getPropertyValue('--startValueY'))
                console.log(rootStyles.getPropertyValue('--startValueX'))
        
                // По этой переменной отслеживаем остановку объекта при достижении другого объекта
                // Так как птица и объект движутся вместе то отслеживает только по птице
                currentWayY = globalTrashGlassPlaceTop
                currentWayX = globalTrashGlassPlaceLeft
        
                // Переносимый объект
                // Запись глобальной переменной в CSS
                root.style.setProperty('--foodCurrentValueY', globalTrashGlassPlaceTop + 'px')
                root.style.setProperty('--foodCurrentValueX', globalTrashGlassPlaceLeft + 'px')
                root.style.setProperty('--foodstartValueY', globalGlassBottleTop + 5 + 'px')
                root.style.setProperty('--foodstartValueX', globalGlassBottleLeft - 20 + 'px') 
        
                // Чтение и вывод
                console.log("glass - glass container - Corr:")
                console.log(rootStyles.getPropertyValue('--foodCurrentValueY'))
                console.log(rootStyles.getPropertyValue('--foodCurrentValueX'))
                console.log(rootStyles.getPropertyValue('--foodstartValueY'))
                console.log(rootStyles.getPropertyValue('--foodstartValueX'))

                // Устанавливаем направление движения птицы для выбора картинки (left/right)
                if (globalTrashGlassPlaceLeft - globalBirdPlaceLeft > 0) {

                    document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

                }
                
                if (globalTrashGlassPlaceLeft - globalBirdPlaceLeft < 0) {

                    document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
                }
                
            }
        
        
        globalBirdStyleCount = 2
        
    }
    
}


function funBirdMoveToKids (){
    
      
    if (globalCurrObject === "food"){

        bird.classList.add("birdFlyToCorXY")
        console.log("bird moving to house")

    }

    if (globalCurrObject === "plastic"){

        bird.classList.add("birdFlyCircleXY")
        console.log("bird moving to plastic container")

    }   

    if (globalCurrObject === "paper"){

        bird.classList.add("birdFlyCircleXY")
        console.log("bird moving to paper container")

    }   

    if (globalCurrObject === "bottle"){

        bird.classList.add("birdFlyCircleXY")
        console.log("bird moving to glass container")

    }

    
    if ( Math.abs(globalBirdPlaceLeft - currentWayX) < 40 && Math.abs(globalBirdPlaceTop - currentWayY) <  40){

        if (globalCurrObject === "plastic"){

            console.log("bird -> plastic container -> true")
        }

        if (globalCurrObject === "food"){

            console.log("bird -> house -> true")
        }

        if (globalCurrObject === "paper"){

            console.log("bird -> paper conteiner -> true")
        }

        if (globalCurrObject === "bottle"){

            console.log("bird -> glass conteiner -> true")
        }

          
        bird.classList.remove("birdFlyToCorXY")
        bird.classList.remove("birdFlyCircleXY")

        bird.style.top = globalBirdPlaceTop + 'px';
        bird.style.left = globalBirdPlaceLeft + 'px';


        // Устанавливаем координаты для нового перемещения
        var root = document.querySelector(':root')
        var rootStyles = getComputedStyle(root)
        var CurrentValueX = rootStyles.getPropertyValue('--CurrentValueX')
        
        // Запись глобальной переменной в CSS 
        root.style.setProperty('--CurrentValueY', globalBirdStartPlaceTop + 'px')
        root.style.setProperty('--CurrentValueX', globalBirdStartPlaceLeft + 'px')
        root.style.setProperty('--startValueY', globalBirdPlaceTop + 'px')
        root.style.setProperty('--startValueX', globalBirdPlaceLeft + 'px')

        // Чтение и вывод
        console.log("House/Cont - start - Corr:")
        console.log(rootStyles.getPropertyValue('--CurrentValueY'))
        console.log(rootStyles.getPropertyValue('--CurrentValueX'))
        console.log(rootStyles.getPropertyValue('--startValueY'))
        console.log(rootStyles.getPropertyValue('--startValueX'))

        globalBirdStyleCount = 3        

        // Устанавливаем направление движения птицы для выбора картинки (left/right)
        if (globalBirdStartPlaceLeft - globalBirdPlaceLeft > 0) {

            document.getElementById('bird').style.backgroundImage = 'url(img/bird_right.gif)';

        }
        
        if (globalBirdStartPlaceLeft - globalBirdPlaceLeft < 0) {

            document.getElementById('bird').style.backgroundImage = 'url(img/bird_left.gif)';
        }
        
    }

}


function funFoodMoveToKids (){

    
    if (globalCurrObject === "food"){

        food.classList.add("foodFlyToCorXY")
        console.log("food moving to house")
    }

    if (globalCurrObject === "plastic"){

        plastic.classList.add("foodFlyCircleXY")
        console.log("plastic bootle moving to plastic container")
    }     
    
    if (globalCurrObject === "paper"){

        paper.classList.add("foodFlyCircleXY")
        console.log("paper moving to paper container")
    }  

    if (globalCurrObject === "bottle"){

        bottle.classList.add("foodFlyCircleXY")
        console.log("glass moving to glass container")
    }  

    
    if (globalCurrObject === "food"){

        if ( Math.abs(globalBirdPlaceLeft - currentWayX) < 40 &&  Math.abs(globalBirdPlaceTop - currentWayY) < 40){

            console.log("food -> house -> true")
     
            food.classList.remove("foodFlyToCorXY")
    
            food.style.top = globalBirdKidsPlaceTop + 50 + 'px';
            food.style.left = globalBirdKidsPlaceLeft + 25 + 'px';
            
        }

    }

    if (globalCurrObject === "plastic"){

        if ( Math.abs(globalBirdPlaceLeft - currentWayX) < 90 &&  Math.abs(globalBirdPlaceTop - currentWayY) < 90){

            console.log("plastic -> plastic container -> true")
     
            plastic.classList.remove("foodFlyCircleXY")
    
            plastic.style.top = globalTrashPlasticPlaceTop - 70 + 'px';
            plastic.style.left = globalTrashPlasticPlaceLeft + 7 + 'px';
            
        }

    }   

    if (globalCurrObject === "paper"){

        if ( Math.abs(globalBirdPlaceLeft - currentWayX) < 90 &&  Math.abs(globalBirdPlaceTop - currentWayY) < 90){

            console.log("paper -> paper container -> true")
     
            paper.classList.remove("foodFlyCircleXY")
    
            paper.style.top = globalPaperPlaceTop - 80 + 'px';
            paper.style.left = globalPaperPlaceLeft -10 + 'px';
            
        }

    }  

    if (globalCurrObject === "bottle"){

        if ( Math.abs(globalBirdPlaceLeft - currentWayX) < 90 &&  Math.abs(globalBirdPlaceTop - currentWayY) < 90){

            console.log("bottle -> glass container -> true")
     
            bottle.classList.remove("foodFlyCircleXY")
    
            bottle.style.top = globalTrashGlassPlaceTop - 80 + 'px';
            bottle.style.left = globalTrashGlassPlaceLeft + 7 + 'px';
            
        }

    }  

}


function funBirdMoveBack (){

    bird.classList.add("birdFlyToCorXY")
    
    console.log("bird moving to start")


    if ( Math.abs(globalBirdPlaceLeft - globalBirdStartPlaceLeft) < 20 &&  Math.abs(globalBirdStartPlaceLeft - globalBirdPlaceLeft) < 20){

        console.log("bird -> start -> true")

        bird.classList.remove("birdFlyToCorXY")

        bird.style.top = globalBirdStartPlaceTop + 'px';
        bird.style.left = globalBirdStartPlaceLeft + 'px';

        globalBirdStyleCount = 4

    }

}



// Перенос объекта мышкой
birdKids = document.getElementById('birdKids');

birdKids.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - birdKids.getBoundingClientRect().left;
    let shiftY = event.clientY - birdKids.getBoundingClientRect().top;  

    birdKids.style.position = 'absolute';
    birdKids.style.zIndex = 1000;
    document.body.append(birdKids);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        birdKids.style.left = pageX - shiftX + 'px';
        birdKids.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    birdKids.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    birdKids.onmouseup = null;
    birdKids.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
food = document.getElementById('food');

food.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - food.getBoundingClientRect().left;
    let shiftY = event.clientY - food.getBoundingClientRect().top;  

    food.style.position = 'absolute';
    food.style.zIndex = 1000;
    document.body.append(food);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        food.style.left = pageX - shiftX + 'px';
        food.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    food.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    food.onmouseup = null;
    food.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
bird = document.getElementById('bird');

bird.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - bird.getBoundingClientRect().left;
    let shiftY = event.clientY - bird.getBoundingClientRect().top;  

    bird.style.position = 'absolute';
    bird.style.zIndex = 1000;
    document.body.append(bird);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        bird.style.left = pageX - shiftX + 'px';
        bird.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    bird.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    bird.onmouseup = null;
    bird.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
tree = document.getElementById('tree');

tree.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - tree.getBoundingClientRect().left;
    let shiftY = event.clientY - tree.getBoundingClientRect().top;  

    tree.style.position = 'absolute';
    tree.style.zIndex = 1000;
    document.body.append(tree);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        tree.style.left = pageX - shiftX + 'px';
        tree.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    tree.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    tree.onmouseup = null;
    tree.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
plastic = document.getElementById('plastic');

plastic.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - plastic.getBoundingClientRect().left;
    let shiftY = event.clientY - plastic.getBoundingClientRect().top;  

    plastic.style.position = 'absolute';
    plastic.style.zIndex = 1000;
    document.body.append(plastic);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        plastic.style.left = pageX - shiftX + 'px';
        plastic.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    plastic.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    plastic.onmouseup = null;
    plastic.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
trashPlastic = document.getElementById('trashPlastic');

trashPlastic.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - trashPlastic.getBoundingClientRect().left;
    let shiftY = event.clientY - trashPlastic.getBoundingClientRect().top;  

    trashPlastic.style.position = 'absolute';
    trashPlastic.style.zIndex = 1000;
    document.body.append(trashPlastic);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        trashPlastic.style.left = pageX - shiftX + 'px';
        trashPlastic.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    trashPlastic.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    trashPlastic.onmouseup = null;
    trashPlastic.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
trashGlass = document.getElementById('trashGlass');

trashGlass.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - trashGlass.getBoundingClientRect().left;
    let shiftY = event.clientY - trashGlass.getBoundingClientRect().top;  

    trashGlass.style.position = 'absolute';
    trashGlass.style.zIndex = 1000;
    document.body.append(trashGlass);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        trashGlass.style.left = pageX - shiftX + 'px';
        trashGlass.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    trashGlass.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    trashGlass.onmouseup = null;
    trashGlass.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
trashPaper = document.getElementById('trashPaper');

trashPaper.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - trashPaper.getBoundingClientRect().left;
    let shiftY = event.clientY - trashPaper.getBoundingClientRect().top;  

    trashPaper.style.position = 'absolute';
    trashPaper.style.zIndex = 1000;
    document.body.append(trashPaper);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        trashPaper.style.left = pageX - shiftX + 'px';
        trashPaper.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    trashPaper.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    trashPaper.onmouseup = null;
    trashPaper.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
paper = document.getElementById('paper');

paper.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - paper.getBoundingClientRect().left;
    let shiftY = event.clientY - paper.getBoundingClientRect().top;  

    paper.style.position = 'absolute';
    paper.style.zIndex = 1000;
    document.body.append(paper);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        paper.style.left = pageX - shiftX + 'px';
        paper.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    paper.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    paper.onmouseup = null;
    paper.style.zIndex = 0;
    }

}


// Перенос объекта мышкой
bottle = document.getElementById('bottle');

bottle.onmousedown = function(event) {
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - bottle.getBoundingClientRect().left;
    let shiftY = event.clientY - bottle.getBoundingClientRect().top;  

    bottle.style.position = 'absolute';
    bottle.style.zIndex = 1000;
    document.body.append(bottle);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        bottle.style.left = pageX - shiftX + 'px';
        bottle.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    bottle.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    bottle.onmouseup = null;
    bottle.style.zIndex = 0;
    }

}





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


// // Координаты мыши относительно объекта
// const game = document.querySelector('.game')
// game.addEventListener('mousemove', event => {

//     //console.log(event)
//     // console.log(event.offsetX)
//     // console.log(event.offsetY)

//     globalMouseCorY = event.offsetX
//     globalMouseCorX = event.offsetY

// })