let gridContainer = document.querySelector('#grid-container')
let resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset);

function row(box) {
    for (box = 1; box <= 16; box++) {
        let box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
        box.addEventListener('mouseover', () => {
            box.classList.add('addColor');
        })
    }
}

function grid(rowNum) {
    for (rowNum = 1; rowNum <= 16; rowNum++) {
        row(rowNum);
    }
}

function reset() {

}

grid();
