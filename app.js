let gridContainer = document.querySelector('#grid-container')
let box = document.createElement('div')
box.classList.add('box');
gridContainer.appendChild(box);

function row(rowNumber) {
    for (let box = 0; box <= 16; box++) {
        let box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
    }
}

function grid() {
    for (let rowNum = 0; rowNum <= 16; rowNum++) {
        row(rowNum);
    }
}

grid();