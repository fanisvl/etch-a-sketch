let gridContainer = document.querySelector('#grid-container')
let resetBtn = document.querySelector('#resetBtn');

function row(squaresPerSide) {
    for (i = 1; i <= squaresPerSide; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
        box.addEventListener('mouseover', () => {
            box.classList.add('addColor');
        })
    }
}

function grid(squaresPerSide) {
    for (rowNum = 1; rowNum <= squaresPerSide; rowNum++) {
        row(squaresPerSide);
    }
}

resetBtn.addEventListener('click', () => {
    reset(prompt("How many squares per side?", "16"));
});

function reset(squaresPerSide) {
    let boxes = document.querySelectorAll('.box');
    let newDimensions = calcDimensions(squaresPerSide);
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('addColor');
        boxes[i].style.width = newDimensions;
        boxes[i].style.height = newDimensions;
    }
    gridContainer.style.cssText = 'grid-template-columns: repeat(' + squaresPerSide + ',' + newDimensions + ")";
    gridContainer.style.cssText = 'grid-template-rows: repeat(' + squaresPerSide + ',' + newDimensions + ")";
    console.log(squaresPerSide + " squaresPerSide");
    console.log(newDimensions + " newDimensions");
}

function calcDimensions(squaresPerSide) {
    let boxWidth = 320 / squaresPerSide;
    return (boxWidth + "px");
}

grid(16);