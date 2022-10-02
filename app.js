let gridContainer = document.querySelector('#grid-container')

function row(rowNumber) {
    for (let box = 1; box <= 16; box++) { // set box = 0 
        let box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
    }
}

function grid() {
    for (let rowNum = 1; rowNum <= 16; rowNum++) { // set rowNum = 2
        row(rowNum);
    }
}

grid();