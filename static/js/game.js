

const choseDifficulty = () => {

    difficultyOption = document.getElementsByClassName('difficulty');

    for (option of difficultyOption) {
        option.addEventListener('click', function () {
            event.target.classList.add('selected-difficulty')
        })
    }
}

choseDifficulty()

function draw(m,n) {
    var canvas = document.getElementById("myCanvas");
    var canvas_text = canvas.getContext("2d");
    var img = document.getElementById("source");
    let h = img.naturalHeight
    let w = img.naturalWidth

    let start_crop_row = 0
    let start_crop_col = 0
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

draw(4,4)