

const choseDifficulty = () => {

    difficultyOption = document.getElementsByClassName('difficulty');

    for (option of difficultyOption) {
        option.addEventListener('click', function () {
            event.target.classList.add('selected-difficulty')
        })
    }
}

choseDifficulty()