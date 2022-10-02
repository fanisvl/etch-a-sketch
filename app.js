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
    reset(prompt("How many squares per side?", "10"));
});

function reset(squares) {
    let boxes = document.querySelectorAll('.box');
    let newDimensions = calc(squares);
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('addColor');
        boxes[i].style.width = newDimensions;
        boxes[i].style.height = newDimensions;
    }
    gridContainer.style.cssText = 'grid-template-columns: repeat(' + squares + ',' + newDimensions + "px)";
    console.log(squares);
    console.log(newDimensions);
}

function calc(squares) {
    let boxWidth = 320 / squares;
    return boxWidth;
}

grid();