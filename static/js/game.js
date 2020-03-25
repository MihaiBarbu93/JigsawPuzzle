function redirectHome(){
    var response = confirm('The game will close and you will lose your progress! Do you want to continue?')
    if(response){
        window.location.href = '/'
    }else{
        return
    } 
}


function restartGame(){
    var response = confirm('All progress will be lost! Are you sure you want to restart game? ')
    if(response){
        window.location.href = currentURL
    }else{
        return
    } 
}


function incrementSeconds(){
    var timer = document.getElementById('timer')
    seconds += 1
    if(seconds >= 60){
        var minutes = Math.floor(seconds / 60);
        var sec = seconds - minutes * 60;
        var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(sec,'0',2);
    }else{
        var finalTime = '00:'+seconds
    }
    timer.textContent = finalTime

}


function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}


const chooseDifficulty = () => {
    document.addEventListener('click', function () {

        if (!event.target.classList.contains('difficulty')) return;

        event.target.classList.add('selected-difficulty');
        let options = document.querySelectorAll('.difficulty');
        for (let i = 0; i < options.length; i++) {
            if (options[i] === event.target) continue;
            options[i].classList.remove('selected-difficulty');
        let tiles_number = event.target.dataset.tiles;
        gameStart(tiles_number);    
        }
    });
}


const clickGameMode = () => {
    radioButtons = document.getElementsByTagName("input");
    for (radioButton of radioButtons) {
        radioButton.addEventListener('click', function () {
            console.log(event.target.value)
        })
    }
}


const getGameMode = () => {
    radioButtons = document.getElementsByTagName('input')
    for (radioButton of radioButtons) {
        if (radioButton.checked) {
            console.log(radioButton.value)
        }
    }
}


const gameStart = (tiles_number) => {
    console.log(tiles_number);
}


function getCategory(){
    let categories = document.querySelectorAll(".category_select")
    for(let catg of categories){
        catg.addEventListener('click',function (event) {
            let catgName=catg.dataset.category;
            catg.href+=catgName;
        })
    }
}


function getImage() {
    let images = document.querySelectorAll(".card-img-top");
    let button = document.getElementById("start-button-link");
    const initialHref = button.href;
    document.addEventListener('click', function () {
        if (!event.target.classList.contains("card-img-top")) return;  
        event.target.classList.add("selected-puzzle")
        for (let i = 0; i < images.length; i++) {
            if (images[i] === event.target) {
                button.href = initialHref;
                let imgName = images[i].dataset.imageName;
                console.log(images[i].dataset.imageName)
                button.href += imgName;
                continue;        
            } 
            images[i].classList.remove('selected-puzzle');
        } console.log(button.href);
    });
}


var currentURL = document.URL

if(currentURL.includes('game')){
    console.log('GAME')
    var seconds = 0
    var timeCounter = setInterval(incrementSeconds, 1000)
    timeCounter
    var homeButton = document.getElementById('home')
    homeButton.addEventListener('click', redirectHome)
    var restartButton = document.getElementById('restart')
    restartButton.addEventListener('click', restartGame)
}else if(currentURL.includes('settings')){
    chooseDifficulty();
    clickGameMode();
    getImage();
    choseDifficulty()
    getGameMode();
}else{
    getCategory()
}












//=============================================================== TESTING =======================================================//
var draggable = null


var draggables = document.querySelectorAll("#piece")
for(d of draggables){
    d.addEventListener('mousedown', setDraggable)
}

function setDraggable(e){
    draggable = e.target
    dragAndDrop(draggable)
}


function dragAndDrop(draggable) {
    // GET ALL THE PLAYERS - DRAGGABLE AND DROP ZONES
    
    var dropzones = document.querySelectorAll('#spot')

        // DRAG START - HIGHLIGHT DROP ZONES WITH CSS CLASS
        draggable.addEventListener("dragstart", function () {
        for (let i = 0; i < dropzones.length; i++) {
            dropzones[i].classList.add("active");
        }
        });
    
        // DRAG END - REMOVE ALL ADDED ACTIVE & OVER CSS CLASS
        draggable.addEventListener("dragend", function () {
        for (let i = 0; i < dropzones.length; i++) {
            dropzones[i].classList.remove("active");
            dropzones[i].classList.remove("over");
        }
        });
    
        // DRAG - AS YOU ARE DRAGGING
        draggable.addEventListener("drag", function () {
        // DO SOMETHING... IF YOU WANT
        });
    


    for (let i = 0; i < dropzones.length; i++) {
    // DRAG ENTER - HIGHLIGHT THIS ZONE
    dropzones[i].addEventListener("dragenter", function () {
        dropzones[i].classList.add("over");
    });

    // DRAG LEAVE - REMOVE HIGHLIGHT ON THIS ZONE
    dropzones[i].addEventListener("dragleave", function () {
        dropzones[i].classList.remove("over");
    });

    // DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    dropzones[i].addEventListener("dragover", function (evt) {
        evt.preventDefault();
    });


    // ON DROP - MOVE THE DRAGGABLE ELEMENT
    dropzones[i].addEventListener("drop", function (evt) {
    
        evt.preventDefault();
        // Will move the draggable element only if dropped into a different box
        
        if (evt.target != draggable.parentNode && evt.target != draggable) {
        draggable.parentNode.removeChild(draggable);
        evt.target.appendChild(draggable);
        
        }
                
    });
    }
    
    
}


// dragula([document.getElementById('puzzle'), document.getElementById('rightPanel')]);