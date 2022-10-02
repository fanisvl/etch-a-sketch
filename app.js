let gridContainer = document.querySelector('#grid-container')

function row() {
    for (let box = 1; box <= 16; box++) {
        let box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
        box.addEventListener('mouseover', () => {
            box.classList.add('boxHover');
        })
    }
}

function grid() {
    for (let rowNum = 1; rowNum <= 16; rowNum++) {
        row(rowNum);
    }
}

grid();
