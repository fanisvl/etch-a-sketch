let gridContainer = document.querySelector('#grid-container')
let resetBtn = document.querySelector('#resetBtn');

function row() {
    for (i = 1; i <= 16; i++) {
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

resetBtn.addEventListener('click', () => {
    reset();
});

function reset() {
    let boxes = document.querySelectorAll('.box');
    for(let i of boxes) {
        i.classList.remove('addColor');
    }
}

grid();