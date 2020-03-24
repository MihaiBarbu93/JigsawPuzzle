
const choseDifficulty = () => {

    document.addEventListener('click', function () {

        if (!event.target.classList.contains('difficulty')) return;

        event.target.classList.add('selected-difficulty');
        let options = document.querySelectorAll('.difficulty');
        for (let i = 0; i < options.length; i++) {
            if (options[i] === event.target) continue;
            options[i].classList.remove('selected-difficulty');
        }
    });
}

function getCategory(){
    let categories=document.querySelectorAll(".category_select")
    for(let catg of categories){
        catg.addEventListener('click',function (event) {
            let catgName=catg.dataset.category;
            catg.href+=catgName;
            console.log(catg.href)
        })
    }

}
getCategory()

choseDifficulty()

function draw(m,n) {
    var canvas = document.getElementById("myCanvas");
    var canvas_text = canvas.getContext("2d");
    var img = document.getElementById("source");
    let h = img.naturalHeight
    let w = img.naturalWidth

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