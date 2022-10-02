let gridContainer = document.querySelector('#grid-container')
let resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset);
let box = document.createElement('div');

function row() {
    for (i = 1; i <= 16; i++) {
        box.classList.add('box');
        gridContainer.appendChild(box);
        box.addEventListener('mouseover', () => {
            box.classList.add('addColor');
        })
    }
}

function grid() {
    for (rowNum = 1; rowNum <= 16; rowNum++) {
        row(rowNum);
    }
}

function reset() {
}

grid();
