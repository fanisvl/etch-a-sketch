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
    reset(prompt("New size", "10px"));
});

function reset(size) {
    let boxes = document.querySelectorAll('.box');
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('addColor');
        boxes[i].style.width = size;
        boxes[i].style.height = size;
    }
    gridContainer.style.gridTemplateColumns = "repeat (16," + size + ")";

}

grid();