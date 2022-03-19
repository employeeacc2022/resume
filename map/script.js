alert('This program is designed for the layout of infrastructure objects on the map. You can place different objects on the map. Such as buildings, parkings, kids places ... etc. In the real time you can see the size and squre of the each object and how they looks all together.  You can change size of each object using the arrow button, also you can rotate each object using A & D. Please note that this program is not working properly yet. In future i\'m going to realize linkage of each object to the map and make correct zoom/meters converter (for any zoom). It\'s just like an idea and I\'m working on it when have some free time.')

// Перенос положения объекта мышкой
// При нажатии на определенный объект запускается обработчик

houseDoc = document.getElementById('house');
houseDoc.onmousedown = function(event) {
    mouseMovement(event, house, 'house')
}

horseHouseDoc = document.getElementById('horseHouse');
horseHouseDoc.onmousedown = function(event) {
    mouseMovement(event, horseHouse, 'horseHouse')
}

horseGrassDoc = document.getElementById('horseGrass');
horseGrassDoc.onmousedown = function(event) {
    mouseMovement(event, horseGrass, 'horseGrass')
}

horseCircleDoc = document.getElementById('horseCircle');
horseCircleDoc.onmousedown = function(event) {
    mouseMovement(event, horseCircle, 'horseCircle')
}

horseGrassDoc2 = document.getElementById('horseGrass2');
horseGrassDoc2.onmousedown = function(event) {
    mouseMovement(event, horseGrass2, 'horseGrass2')
}

house3dDoc = document.getElementById('house3d');
house3dDoc.onmousedown = function(event) {
    mouseMovement(event, house3d, 'house3d')
}


function mouseMovement (event, object, objectId) {

    //alert('Размеры объекта меняются стрелками, угол поворота меняется клавишами A и D')
     
    // Смещение к точке за которую взяли объект (взяли со смещением и несем со смещением)
    let shiftX = event.clientX - object.getBoundingClientRect().left;
    let shiftY = event.clientY - object.getBoundingClientRect().top;  

    // object.style.position = 'absolute';
    // object.style.zIndex = 1000;
    document.body.append(object);

    moveAt(event.pageX, event.pageY);
    
    function moveAt (pageX, pageY) {
        object.style.left = pageX - shiftX + 'px';
        object.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // событие mousemove отслеживается на document
    document.addEventListener('mousemove', onMouseMove);

    object.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    object.onmouseup = null;
    object.style.zIndex = 0;
    console.log("mouse up ok")
    }

    // Изменение размера и угла поворота объекта стрелками
    window.onkeydown = function(event){

        objectMovement(event, object, objectId)

    }
}


// Изменение положения объекта стрелками
// function objectMovement(){
    function objectMovement(event, Object, objectId){

    console.log('key press ok')
       
    // CSS-высоту и ширину можно установить с помощью elem.style и извлечь, используя getComputedStyle
    
    // Метод Window.getComputedStyle () возвращает объект, содержащий значения всех CSS-свойств элемента,
    // полученных после применения всех активных таблиц стилей, и завершения базовых вычислений значений, которые они могут содержать.
    // parseInt преобразует первый переданный ей аргумент в строковый тип, интерпретирует его и возвращает целое число или значение NaN.
    
    let objectWidth = parseInt(window.getComputedStyle(Object).getPropertyValue("width"));
    let objectHeight = parseInt(window.getComputedStyle(Object).getPropertyValue("height"));

      
    if(event.keyCode == 37){

        // Document.getElementById (). Возвращает ссылку на элемент по его идентификатору (ID)
        // идентификатор является строкой, которая может быть использована для идентификации элемента; она может быть определена при помощи атрибута id в HTML или из скрипта.
        objectWidth = objectWidth - 5;
        document.getElementById(objectId).style.width = objectWidth + 'px';
        document.getElementById(objectId).style.height = objectHeight + 'px';
        document.getElementById(objectId).style.backgroundSize = `${objectWidth}px ${objectHeight}px`;

        // console.log(objectWidth)
        // console.log(objectHeight)
    }

    if(event.keyCode == 39){
    
        objectWidth = objectWidth + 5;
        document.getElementById(objectId).style.width = objectWidth + 'px';
        document.getElementById(objectId).style.height = objectHeight + 'px';
        document.getElementById(objectId).style.backgroundSize = `${objectWidth}px ${objectHeight}px`;
         
    }

    if(event.keyCode == 40){

        objectHeight = objectHeight + 5;
        document.getElementById(objectId).style.width = objectWidth + 'px';
        document.getElementById(objectId).style.height = objectHeight + 'px';
        document.getElementById(objectId).style.backgroundSize = `${objectWidth}px ${objectHeight}px`;
    }

    if(event.keyCode == 38){

        objectHeight = objectHeight - 5;
        document.getElementById(objectId).style.width = objectWidth + 'px';
        document.getElementById(objectId).style.height = objectHeight + 'px';
        document.getElementById(objectId).style.backgroundSize = `${objectWidth}px ${objectHeight}px`;
    }

    if(event.keyCode == 68){

        // функция для определения угла наклона элемента 
        let currentObjectDegree = getDegreeElementById(objectId) + 3.75

        // Запись данных в CSS
        document.getElementById(objectId).style.transform = `rotate(${currentObjectDegree}deg)`;

    }

    if(event.keyCode == 65){

        // функция для определения угла наклона элемента 
        let currentObjectDegree = getDegreeElementById(objectId) - 3.75

        // Запись данных в CSS
        document.getElementById(objectId).style.transform = `rotate(${currentObjectDegree}deg)`;

    }

}


function getObjectSize(Object, objectId){

    // Преобразование пикселей в метры
    meters_per_pixel = 0.172

    let objectPlaceLeft = parseInt(window.getComputedStyle(Object).getPropertyValue("width"));
    let objectPlaceTop = parseInt(window.getComputedStyle(Object).getPropertyValue("height"));

    objectPlaceLeft = Math.floor(objectPlaceLeft*meters_per_pixel)
    objectPlaceTop = Math.floor(objectPlaceTop*meters_per_pixel)

    document.getElementById(objectId).innerHTML = `${objectPlaceLeft} x ${objectPlaceTop} || S = ${objectPlaceLeft*objectPlaceTop} m2`;

} 


function funInfinite(){

    // ОТображение размера на объекте
    getObjectSize(house, 'house')
    getObjectSize(horseHouse, 'horseHouse')
    getObjectSize(horseGrass, 'horseGrass')
    getObjectSize(horseGrass2, 'horseGrass2')
    getObjectSize(horseCircle, 'horseCircle')
    getObjectSize(house3d, 'house3d')

    // ОТображение размера на объекте
    // Временные объекты
    for (let i = 0; i < newMapObjectDoc.length; i++){

        if (newMapObjectDoc[i]){         
            getObjectSize(newMapObjectDoc[i], newMapObjectId[i])
        } 
    }

    // Перемещение временных объектов
    tempObjectControl()

}

setInterval(funInfinite, 10)




let map;
var meters_per_pixel;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    
    center: { lat: 53.9321222, lng: 28.0979060 },
    zoom: 19,
    mapTypeId: 'satellite'

  });

  //meters_per_pixel = 2256.994440 * Math.cos(53.9327313 * Math.PI / 180) / Math.pow(2, 19)

  //meters_per_pixel = 2256.994440 * Math.cos(53.9321222 * Math.PI / 180) / Math.pow(2, 19)

 // 'latLng.lat()' = map.getCenter.lat()
 // 'zoom' = map.getZoom()

  console.log(meters_per_pixel)

}


// function initMapMarker() {
    
//     var marker = new google.maps.Marker({
// 	position: { lat: 53.9321222, lng: 28.0979060 },
// 	map: map,
// 	title: 'HOUSE',
//     icon: {
//         url: window.devicePixelRatio > 1 ? "img/icon.png" : "img/icon.png",
//         scaledSize: new google.maps.Size(48, 48)
//     }
// })
// }


// функция для определения угла наклона элемента 
function getDegreeElementById(id_element){
    var element = document.getElementById(id_element);
    var style = window.getComputedStyle(element, null);
    // получаем значение стилей
    var valueStyle = style.getPropertyValue("-webkit-transform") ||
        style.getPropertyValue("-moz-transform") ||
        style.getPropertyValue("-ms-transform") ||
        style.getPropertyValue("-o-transform") ||
        style.getPropertyValue("transform");
    // если стилей нет, то угол 0 градусов
    if(valueStyle == 'none') return 0;
    // разбираем полученное значение
    //console.log(valueStyle);
    var values = valueStyle.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    // получаем синус и косинус
    var cos = values[0];
    var sin = values[1];
    // вычисляем угол
    var degree = Math.round(Math.asin(sin) * (180/Math.PI));
    if(cos<0){
        addDegree = 90 - Math.round(Math.asin(sin) * (180/Math.PI));
        degree = 90 + addDegree;
    }
    if(degree < 0){
        degree = 360 + degree;
    }
    return degree;
}




// События по нажатию на кнопки 'add object'
button_1Doc = document.getElementById('button_1');
button_1Doc.onmousedown = function(event) {
    generalButtonEvent('.classMenu_1', 'exitButton1')
}

button_2Doc = document.getElementById('button_2');
button_2Doc.onmousedown = function(event) {
    generalButtonEvent('.classMenu_2', 'exitButton2')
}

button_3Doc = document.getElementById('button_3');
button_3Doc.onmousedown = function(event) {
    generalButtonEvent('.classMenu_3', 'exitButton3')
}

button_4Doc = document.getElementById('button_4');
button_4Doc.onmousedown = function(event) {
    generalButtonEvent('.classMenu_4', 'exitButton4')
}

button_5Doc = document.getElementById('button_5');
button_5Doc.onmousedown = function(event) {
    generalButtonEvent('.classMenu_5', 'exitButton5')
}

// По нажатию на кнопку 1 открывается меню 1, 2 - меню 2, 3 - меню 3 ...
function generalButtonEvent (menuClass, exitButton) {

    // Перед тем как открыть новое окно закрываем все ранее открытые (возможно открытые)
    let tempClassMenu = document.querySelector('.classMenu_1');
    tempClassMenu.classList.remove('active');
    tempClassMenu = document.querySelector('.classMenu_2');
    tempClassMenu.classList.remove('active');
    tempClassMenu = document.querySelector('.classMenu_3');
    tempClassMenu.classList.remove('active');
    tempClassMenu = document.querySelector('.classMenu_4');
    tempClassMenu.classList.remove('active');
    tempClassMenu = document.querySelector('.classMenu_5');
    tempClassMenu.classList.remove('active');

    let classGeneralButtonEvent = document.querySelector(menuClass);
    classGeneralButtonEvent.classList.add('active');

 
    // Копка выходя из меню. 'Exit'
    exitButtonDoc = document.getElementById(exitButton);
    exitButtonDoc.onmousedown = function(event) {
        exitButtonEvent(menuClass)
    }

    // Обработчик выхода из меню. 'Exit'
    function exitButtonEvent (menuClass) {
    let classMenuDoc = document.querySelector(menuClass);
    classMenuDoc.classList.remove('active');
    }

}


// // События по нажатию на кнопки 'add object 1, 2, 3, 4, 5'
// generalButtonEvent('button_1', 'classMenu_1_1')
// generalButtonEvent('button_2', 'classMenu_1_2')
// generalButtonEvent('button_3', 'classMenu_1_3')
// generalButtonEvent('button_4', 'classMenu_1_4')
// generalButtonEvent('button_5', 'classMenu_1_5')


// // По нажатию на кнопку открывается меню
// function generalButtonEvent (generalButtonId, InnerObjectClass) {

//     tempButtonDoc = document.getElementById(generalButtonId);
//     tempButtonDoc.onmousedown = function(event) {

//     let classGeneralButtonEvent = document.querySelector('classMenu_1');
//     classGeneralButtonEvent.classList.add('active');
//     }
    
// }


// Обработка нажатия на меню 1-x
pressMenuAction(menu_1_1, 'menu_1_1', 'classMenu_1_1')
pressMenuAction(menu_1_2, 'menu_1_2', 'classMenu_1_2')
pressMenuAction(menu_1_3, 'menu_1_3', 'classMenu_1_3')
pressMenuAction(menu_1_4, 'menu_1_4', 'classMenu_1_4')
pressMenuAction(menu_1_5, 'menu_1_5', 'classMenu_1_5')
pressMenuAction(menu_1_6, 'menu_1_6', 'classMenu_1_5')
pressMenuAction(menu_1_7, 'menu_1_7', 'classMenu_1_7')
pressMenuAction(menu_1_8, 'menu_1_8', 'classMenu_1_8')

pressMenuAction(menu_2_1, 'menu_2_1', 'classMenu_2_1')
pressMenuAction(menu_2_2, 'menu_2_2', 'classMenu_2_2')
pressMenuAction(menu_2_3, 'menu_2_3', 'classMenu_2_3')
pressMenuAction(menu_2_4, 'menu_2_4', 'classMenu_2_4')
pressMenuAction(menu_2_5, 'menu_2_5', 'classMenu_2_5')
pressMenuAction(menu_2_6, 'menu_2_6', 'classMenu_2_6')
pressMenuAction(menu_2_7, 'menu_2_7', 'classMenu_2_7')
pressMenuAction(menu_2_8, 'menu_2_8', 'classMenu_2_8')

pressMenuAction(menu_3_1, 'menu_3_1', 'classMenu_3_1')
pressMenuAction(menu_3_2, 'menu_3_2', 'classMenu_3_2')
pressMenuAction(menu_3_3, 'menu_3_3', 'classMenu_3_3')
pressMenuAction(menu_3_4, 'menu_3_4', 'classMenu_3_4')
pressMenuAction(menu_3_5, 'menu_3_5', 'classMenu_3_5')
pressMenuAction(menu_3_6, 'menu_3_6', 'classMenu_3_5')
pressMenuAction(menu_3_7, 'menu_3_7', 'classMenu_3_7')
pressMenuAction(menu_3_8, 'menu_3_8', 'classMenu_3_8')

pressMenuAction(menu_4_1, 'menu_4_1', 'classMenu_4_1')
pressMenuAction(menu_4_2, 'menu_4_2', 'classMenu_4_2')
pressMenuAction(menu_4_3, 'menu_4_3', 'classMenu_4_3')
pressMenuAction(menu_4_4, 'menu_4_4', 'classMenu_4_4')
pressMenuAction(menu_4_5, 'menu_4_5', 'classMenu_4_5')
pressMenuAction(menu_4_6, 'menu_4_6', 'classMenu_4_5')
pressMenuAction(menu_4_7, 'menu_4_7', 'classMenu_4_7')
pressMenuAction(menu_4_8, 'menu_4_8', 'classMenu_4_8')

pressMenuAction(menu_5_1, 'menu_5_1', 'classMenu_5_1')
pressMenuAction(menu_5_2, 'menu_5_2', 'classMenu_5_2')
pressMenuAction(menu_5_3, 'menu_5_3', 'classMenu_5_3')
pressMenuAction(menu_5_4, 'menu_5_4', 'classMenu_5_4')
pressMenuAction(menu_5_5, 'menu_5_5', 'classMenu_5_5')
pressMenuAction(menu_5_6, 'menu_5_6', 'classMenu_5_5')
pressMenuAction(menu_5_7, 'menu_5_7', 'classMenu_5_7')
pressMenuAction(menu_5_8, 'menu_5_8', 'classMenu_5_8')


// Обработка нажатия на меню 1-x (1-1, 1-2 ....)
function pressMenuAction (object, objectId, classId) {

    //console.log(objectId)

    objectDoc = document.getElementById(objectId);

    objectDoc.onmousedown = function(event) {    
    
    addObjectToMap(object, objectId, classId)

    // Выход из меню после выбора - СЕЙЧАС НЕ РАБОТАЕТ ТАК КАК НУЖНО УДАЛЯТЬ КЛАСС МЕНЮ 1 А НЕ 1-1
    // let tempClassMenu = document.querySelector(classId);
    // tempClassMenu.classList.remove('active');

    }
    
}



// Счетчик и массив временных объектов
var mapObjectCount = 0
var newMapObjectDoc = []
var newMapObjectId = []
// Статус места для нового эленета, место недоступно = 1, доступно = 0
var objectPlaceNotAvailable = [0, 0, 0, 0, 0, 0, 0, 0]


// Создаем временный элемент div и отправляем на экран
function addObjectToMap (object, objectId, classId) {

    //console.log(mapObjectCount)

    mapObjectCount = mapObjectCount + 1

    // Создаем элемент div
    var div = document.createElement("div");
    var name = "mapObject"
    newMapObject = name + mapObjectCount

    var tempId = newMapObject
    tempCount = mapObjectCount

    newMapObjectId[tempCount] = tempId

    // Присваиваем имя и класс новому объекту
    div.id = newMapObject;
    div.className = classId;
    // Добавляем div(объект) в раздел body
    document.body.append(div);
    
    // Записываем новый объект в массив объектов, необходимо для реализации 'newMapObjectDoc[tempCount].onmousedown' - нажатие на объект мышкой
    newMapObjectDoc[tempCount] = document.getElementById(newMapObjectId[tempCount]);


    // Устанавливаем место где появится новый объект, для этого проверяем свободное место, предварительно есть 8 положений слева от карты. Проверяем координаты уже созданных объектов.
    // Обнуляем признаки того что место для нового элемента занято
    objectPlaceNotAvailable = [0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 1; i < newMapObjectDoc.length; i++){

        let objectLeft = parseInt(window.getComputedStyle(newMapObjectDoc[i]).getPropertyValue("left"));
        let objectTop = parseInt(window.getComputedStyle(newMapObjectDoc[i]).getPropertyValue("top"));

        if (objectLeft === 120 && objectTop === 40){

            objectPlaceNotAvailable[0] = 1
        }

        if (objectLeft === 120 && objectTop === 160){
            
            objectPlaceNotAvailable[1] = 1
        }    

        if (objectLeft === 120 && objectTop === 280){
            
            objectPlaceNotAvailable[2] = 1  
        }         

        if (objectLeft === 120 && objectTop === 400){
            
            objectPlaceNotAvailable[3] = 1  
        }         

        if (objectLeft === 240 && objectTop === 40){
            
            objectPlaceNotAvailable[4] = 1  
        }

        if (objectLeft === 240 && objectTop === 160){
            
            objectPlaceNotAvailable[5] = 1  
        }         

        if (objectLeft === 240 && objectTop === 280){
            
            objectPlaceNotAvailable[6] = 1  
        }         

        if (objectLeft === 240 && objectTop === 400){
            
            objectPlaceNotAvailable[7] = 1  
        }         

    }

    
    // Проверяем есть ли свободное место для нового объекта
    for (let i = 0; i < 9; i++){

       if (objectPlaceNotAvailable[i] === 0){
        
        // Передаем в функцию номер первой свободной ячейки
        placeObject(i)
        objectPlaceNotAvailable[i] === 0
        return; // Выходим из 'for'
       }
       
       // Если нет свободного места
       if (i === 8){

        // alert('Limit exceed. Maximun 8 objects can be placed on the panel. To continue please move object to the map.')

        // document.getElementById(newMapObjectId[tempCount]).style.left = '0px';
        // document.getElementById(newMapObjectId[tempCount]).style.top = '0px';
        // document.getElementById(newMapObjectId[tempCount]).style.width = '0px';
        // document.getElementById(newMapObjectId[tempCount]).style.height = '0px';
       }
       
    }


    // Установка координат
    function placeObject (freePlaceNumber){
        
        let left
        let top

        if (freePlaceNumber === 0){
            left = '120px'
            top = '40px'
        }
        if (freePlaceNumber === 1){
            left = '120px'
            top = '160px'
        }
        if (freePlaceNumber === 2){
            left = '120px'
            top = '280px'
        }
        if (freePlaceNumber === 3){
            left = '120px'
            top = '400px'
        }
        if (freePlaceNumber === 4){
            left = '240px'
            top = '40px'
        }
        if (freePlaceNumber === 5){
            left = '240px'
            top = '160px'
        }
        if (freePlaceNumber === 6){
            left = '240px'
            top = '280px'
        }
        if (freePlaceNumber === 7){
            left = '240px'
            top = '400px'
        }

        document.getElementById(newMapObjectId[tempCount]).style.left = left;
        document.getElementById(newMapObjectId[tempCount]).style.top = top;
        document.getElementById(newMapObjectId[tempCount]).style.width = '80px';
        document.getElementById(newMapObjectId[tempCount]).style.height = '80px';
        document.getElementById(newMapObjectId[tempCount]).style.backgroundSize = '80px 80px';
        
    }


}



// Контролируем 'onmousedown' во временно созданных объектах div. Ф-я запускается через funInfinite() раз в 10 мс.
function tempObjectControl(){
    
    for (let i = 0; i < newMapObjectDoc.length; i++){

        if (newMapObjectDoc[i]){
         // Управление объектом
         newMapObjectDoc[i].onmousedown = function(event) {
         mouseMovement(event, newMapObjectDoc[i], newMapObjectId[i])
         }
        } 
    }

}





// let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
// let popup = document.querySelector('.popup'); // Само окно
// let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
// let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

// openPopupButtons.forEach((button) => { // Перебираем все кнопки
//     button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//         e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//         popupBg.classList.add('active'); // Добавляем класс 'active' для фона
//         popup.classList.add('active'); // И для самого окна
//     })
// });




// Пример изменения свойств класса
// document.getElementsByClassName('mystyle')[0].style.margin = "50px";
// document.getElementsByClassName('mystyle')[0].style= "margin: 50px";
// $('.mystyle').css('margin','10px')