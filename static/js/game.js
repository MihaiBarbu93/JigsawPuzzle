

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