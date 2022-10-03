let gridContainer = document.querySelector('#grid-container');
let resetBtn = document.querySelector('#resetBtn');

function row(squaresPerSide) {
    for (i = 1; i <= squaresPerSide; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.width = "" + calcDimensions(squaresPerSide) + "";
        box.style.height = "" + calcDimensions(squaresPerSide) + "";
        gridContainer.appendChild(box);
        box.addEventListener('mouseover', () => {
            box.classList.add('addColor');
        })
    }
}

function calcDimensions(squaresPerSide) {
    let dimensions = 320 / squaresPerSide; // 320 is the grid's fixed size in px
    let newDimensions = dimensions + "px";
    return newDimensions;
}

row(16);