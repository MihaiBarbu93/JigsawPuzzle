
const choseDifficulty = () => {

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

choseDifficulty();


const clickGameMode = () => {
    radioButtons = document.getElementsByTagName("input");
    for (radioButton of radioButtons) {
        radioButton.addEventListener('click', function () {
            console.log(event.target.value)
        })
    }
}

clickGameMode();


const getGameMode = () => {

    radioButtons = document.getElementsByTagName('input')
    for (radioButton of radioButtons) {
        if (radioButton.checked) {
            console.log(radioButton.value)
        }
    }
}

getGameMode();


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
getCategory()


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


getImage();

function draw(m,n) {
    var canvas = document.getElementById("myCanvas");
    var canvas_text = canvas.getContext("2d");
    var img = document.getElementById("source");
    let h = img.naturalHeight
    let w = img.naturalWidth

    let start_crop_col = 0
    let start_crop_row = 0
    let dx = Math.floor(Math.random() * 200);
    let dy = Math.floor(Math.random() * 200);


    for (let j = 0; j<n; j++){
        for (let i = 0; i<m; i++){
            canvas_text.drawImage(img,start_crop_row,start_crop_col,w/m,h/n,dx,dy,50,50);
            dx =Math.floor(Math.random() * 200);
            dy =Math.floor(Math.random() * 200);
            start_crop_row += w/m
            }
        start_crop_row = 0
        start_crop_col+=h/n;
    }}

draw(2,2)