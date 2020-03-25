
// const choseDifficulty = (gameSettings) => {

//     document.addEventListener('click', function () {

//         if (!event.target.classList.contains('difficulty')) return;

//         event.target.classList.add('selected-difficulty');
//         let options = document.querySelectorAll('.difficulty');
//         for (let i = 0; i < options.length; i++) {
//             if (options[i] === event.target) continue;
//             options[i].classList.remove('selected-difficulty');   
//         }
//         let tiles_number = event.target.dataset.tiles;
//         gameSettings[0] = parseInt(tiles_number);
//         return gameSettings
//     });
// }


// const clickGameMode = (gameSettings) => {
//     radioButtons = document.getElementsByTagName("input");
//     for (radioButton of radioButtons) {
//         radioButton.addEventListener('click', function () {
//             gameSettings[1] = event.target.value;
//             return gameSettings;
//         })
//     }
// }


const getAllGameSettings = () => {
    let gameSettingsUpdated = [null, "single", null];
    let button = document.getElementById("start-button-link");
    let images = document.querySelectorAll(".card-img-top");
    console.log(images)

    document.addEventListener('click', function () {


        if (event.target.classList.contains('radio-button')) {
            gameSettingsUpdated[1] = event.target.value;
            console.log(gameSettingsUpdated)
        }

        else if (event.target.classList.contains("difficulty")) {

            event.target.classList.add("selected-difficulty");
            let options = document.querySelectorAll(".difficulty");
            for (let i = 0; i < options.length; i++) {
                if (options[i] === event.target) continue;
                options[i].classList.remove("selected-difficulty");
            }
            let tiles_number = event.target.dataset.tiles;
            gameSettingsUpdated[0] = tiles_number.split(",").map(Number);
            console.log(gameSettingsUpdated)
        }

        else if (event.target.classList.contains('card-img-top')) {

            const initialHref = "/game/";
            for (let i = 0; i < images.length; i++) {
                if (images[i] === event.target) {
                images[i].classList.add("selected-puzzle");
                button.href = initialHref;
                let imgName = images[i].dataset.imageName;
                gameSettingsUpdated[2] = imgName
                button.href += imgName;
                continue;
              }
              images[i].classList.remove("selected-puzzle");
            }
            console.log(button.href);
            console.log(gameSettingsUpdated)
        }

        else if (event.target.classList.contains('start-game-button')) {

            if (gameSettingsUpdated[0] == null) {
                alert("Please select a difficulty level");
                button.href = "#";
                return
            }
            else if (gameSettingsUpdated[2] == null) {
                alert("Please select a photo for the puzzle")
                button.href = "#"
                return
            }
            else if (gameSettingsUpdated[2] != null && gameSettingsUpdated[0] != null) {
              button.href = `/game/${gameSettingsUpdated[2]}`;
            }
        }
    })

    // console.log(gameSettingsUpdated)
    // gameSettingsUpdated[0] = choseDifficulty(gameSettingsUpdated);
    // // gameSettingsUpdated[1] = clickGameMode(gameSettingsUpdated);
    // console.log("updated game settings:", gameSettingsUpdated)
};

getAllGameSettings();


function getCategory(){
    let categories = document.querySelectorAll(".category_select")
    for(let catg of categories){
        catg.addEventListener('click',function (event) {
            let catgName=catg.dataset.category;
            catg.href+=catgName;
        })
    }
}

getCategory()


// function getImage() {

//     let images = document.querySelectorAll(".card-img-top");
//     let button = document.getElementById("start-button-link");
//     const initialHref = button.href;


//     document.addEventListener('click', function () {

//         if (!event.target.classList.contains("card-img-top")) return;  
        
//         event.target.classList.add("selected-puzzle")
//         for (let i = 0; i < images.length; i++) {
//             if (images[i] === event.target) {
//                 button.href = initialHref;
//                 let imgName = images[i].dataset.imageName;
//                 console.log(images[i].dataset.imageName)
//                 button.href += imgName;
//                 continue;        
//             } 
//             images[i].classList.remove('selected-puzzle');
//         } console.log(button.href);
//     });
// }

// getImage();

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