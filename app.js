let gridContainer = document.querySelector('#grid-container');
let sizeBtn = document.querySelector('#sizeBtn');
let clearBtn = document.querySelector('#clearBtn');
let eraseBtn = document.querySelector('#eraseBtn');
let eraseActive = false;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function column(squaresPerSide) {
    for (i = 1; i <= squaresPerSide; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.width = "" + calcDimensions(squaresPerSide) + "";
        box.style.height = "" + calcDimensions(squaresPerSide) + "";
        gridContainer.appendChild(box);
        box.addEventListener('mouseover', () => {
            if (mouseDown == true && eraseActive == false) {
                box.classList.add('addColor');
            }
            else if(mouseDown == true) {
                box.classList.remove('addColor');
            }
        })
    }
}

function calcDimensions(squaresPerSide) {
    let dimensions = 500 / squaresPerSide; // 500 can be changed to modify gridContainer's size.
    let newDimensions = dimensions + "px";
    return newDimensions;
}

function columnRepeat(squaresPerSide) {
    gridContainer.style.cssText = 'grid-template-columns: repeat(' + squaresPerSide + "," + calcDimensions(squaresPerSide) + ")";
    for (let i = 1; i <= squaresPerSide; i++) {
        column(squaresPerSide);
    }
}

eraseBtn.addEventListener('click', () => {
    eraseBtn.classList.toggle('eraseBtnActive');
    eraseActive = !eraseActive;
})

sizeBtn.addEventListener('click', () => {
    resize(prompt("How many squares per side? (1-100)", "64"));
})

function resize(squaresPerSide) {
    if (squaresPerSide > 100) {
        alert('Error, maximum value is 100');
    }
    else if (squaresPerSide <= 0) {
        alert('Error, please enter a positive value!');
    }
    else if (isNaN(squaresPerSide)) {
        alert('Error, please enter a number value.')
    }
    else {
        let boxes = document.querySelectorAll('.box');
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove('addColor');
            gridContainer.removeChild(boxes[i]);
        }
        columnRepeat(squaresPerSide);
    }
}

clearBtn.addEventListener('click', clear);

function clear() {
    let boxes = document.querySelectorAll('.box');
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove('addColor');
        }
}

columnRepeat(64);