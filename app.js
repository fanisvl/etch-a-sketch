let gridContainer = document.querySelector('#grid-container')
let box = document.createElement('div')
box.classList.add('box');
gridContainer.appendChild(box);

function row(rowNumber) {
    for (let box = 1; box <= 16; box++) {
        let box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
    }
}

function grid() {
    for (let rowNum = 1; rowNum <= 16; rowNum++) {
        row(rowNum);
    }
}

grid();