
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
        })
    }
}
getCategory()


function getImage() {
  let Images = document.querySelectorAll(".select-puzzle");
  for (let img of Images) {
    img.addEventListener("click", function(event) {
      let imgName = img.dataset.imageName;
      img.href += imgName ;
    });
  }
}
getImage();
choseDifficulty()


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



// OLD CROPPING

// function draw(m,n) {
//     var canvas = document.getElementById("myCanvas");
//     var canvas_text = canvas.getContext("2d");
//     var img = document.getElementById("source");
//     let h = img.naturalHeight
//     let w = img.naturalWidth

//     let start_crop_col = 0
//     let start_crop_row = 0
//     let dx = Math.floor(Math.random() * 200);
//     let dy = Math.floor(Math.random() * 200);


//     for (let j = 0; j<n; j++){
//         for (let i = 0; i<m; i++){
//             canvas_text.drawImage(img,start_crop_row,start_crop_col,w/m,h/n,dx,dy,50,50);
//             dx =Math.floor(Math.random() * 200);
//             dy =Math.floor(Math.random() * 200);
//             start_crop_row += w/m
//             }
//         start_crop_row = 0
//         start_crop_col+=h/n;
//     }}

// draw(2,2)



// POSSIBLE WAY TO DRAG AND DROP

// function drag_start(event) {
//     var style = window.getComputedStyle(event.target, null);
//     event.dataTransfer.setData("text/plain",
//     (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
// } 


// function drop(event) {
//     var offset = event.dataTransfer.getData("text/plain").split(',');
//     var pieces = document.querySelectorAll('#piece')
//     for(p of pieces){
//         p.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
//         p.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
//         event.preventDefault();
//         return false;
//     }

// }

// function drag_over(event) {
//     event.preventDefault();
//     return false;
// } 

// var pieces = document.querySelectorAll('#piece');
// for(p of pieces){
//     p.addEventListener('dragstart',drag_start,false);
//     document.body.addEventListener('dragover',drag_over,false);
//     document.body.addEventListener('drop',drop,false); 
// }