let isAlive = setTimeout(setColor, 1)


// Проверка на чётность
var isEven = function(someNumber) {
    return (someNumber % 2 == 0) ? true : false;
};


function setColor (){

    let lineCounter

    for (let i = 1; i < 201; i++){

        if ( (i > 20 && i < 41) || (i > 60 && i < 81) || (i > 100 && i < 121)  || (i > 140 && i < 161)  || (i > 180 && i < 201)){
            lineCounter = true
        }
        else{
            lineCounter = false
        }


        if (lineCounter){
            let block = "block" + i

            // isEven(64) четное вернёт true
            if(isEven(i)){            
                document.getElementById(block).style.background = '#c0cc1c7e';
                //document.getElementById(block).style.background = '#00b7ff';

            }
            else{
                document.getElementById(block).style.background = '#967bc77e';
                //document.getElementById(block).style.background = '#afe4f8';

            }
        }
        else{
            let block = "block" + i

            // isEven(64) четное вернёт true
            if(isEven(i)){            
                document.getElementById(block).style.background = '#967bc77e';
                //document.getElementById(block).style.background = '#afe4f8';

            }
            else{
                document.getElementById(block).style.background = '#c0cc1c7e';
                //document.getElementById(block).style.background = '#00b7ff';

            }
        }

    }

}



var blockNumberStart = Array.from({ length: 200 }, (v, i) =>  i + 1);

function deleteColorStart (){

    if (blockNumberStart[0] < 101){

        let block = "block" + blockNumberStart[0]
        blockNumberStart.splice(0, 1);
    
        if (blockNumberStart[0] != 44 && blockNumberStart[0] != 45 && blockNumberStart[0] != 64 && blockNumberStart[0] != 84 && blockNumberStart[0] != 85 && 
            blockNumberStart[0] != 104 && blockNumberStart[0] != 124 && blockNumberStart[0] != 125
            && blockNumberStart[0] != 87 && blockNumberStart[0] != 88 && blockNumberStart[0] != 89
            && blockNumberStart[0] != 31 && blockNumberStart[0] != 51 && blockNumberStart[0] != 71 && blockNumberStart[0] != 91 && blockNumberStart[0] != 50 && blockNumberStart[0] != 52
            && blockNumberStart[0] != 54 && blockNumberStart[0] != 74 && blockNumberStart[0] != 94 && blockNumberStart[0] != 55 && blockNumberStart[0] != 95
            && blockNumberStart[0] != 97 && blockNumberStart[0] != 98 ){
            document.getElementById(block).style.background = '#84d2ff';
        }    

    }

}


var blockNumberEnd = Array.from({ length: 200 }, (v, i) =>  i + 1); // массив от 1 до 200
blockNumberEnd = blockNumberEnd.reverse(); // развернуть массив 200 .. 1
//blockNumberEnd.splice(40, 160); // Оствляем 200 - 161

function deleteColorEnd (){

    if (blockNumberEnd[0] > 100){

        let block = "block" + blockNumberEnd[0]
        blockNumberEnd.splice(0, 1);
    
        if (blockNumberEnd[0] != 102 && blockNumberEnd[0] != 122 && blockNumberEnd[0] != 123 &&
            blockNumberEnd[0] != 105 && blockNumberEnd[0] != 107 && blockNumberEnd[0] != 122 && blockNumberEnd[0] != 125 && blockNumberEnd[0] != 127
            && blockNumberEnd[0] != 109 && blockNumberEnd[0] != 129 && blockNumberEnd[0] != 130
            && blockNumberEnd[0] != 132 && blockNumberEnd[0] != 133 && blockNumberEnd[0] != 112
            && blockNumberEnd[0] != 115 && blockNumberEnd[0] != 135 ){
            document.getElementById(block).style.background = '#84d2ff';
        }   

    }

}

isAlive = setInterval(deleteColorStart, 25)
let isAlive2 = setInterval(deleteColorEnd, 25)
 



function openMainPage(){

    setInterval(changeColorEnter, 300)
    setTimeout(openNewWindow, 3000)
    
}

function openNewWindow(){
    window.location.href = './main.html';
}


// Смена цвета 'Enter'
var letterBlocks = ['30', '43', '44', '49', '50', '51', '53', '54', '63', '70', '73', '83', '84', '86', '87', '88', '90', '93', '94', '96', '97', '103', '106', '108', '110', '113', '116', '123', '124', '126', '128', '130', '131', '133', '134', '136'];

function changeColorEnter(){

    for (let i = 0; i < letterBlocks.length; i++){

        let block = "block" + letterBlocks[i]
    
        console.log(block)
    
        var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        console.log(randomColor)
        document.getElementById(block).style.background = randomColor;
    
    }

}


