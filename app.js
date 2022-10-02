let gridContainer = document.querySelector('#grid-container')
let box = document.createElement('div')
box.classList.add('box');
gridContainer.appendChild(box);

function row() {
    for (let i = 0; i <= 16; i++) {
        let i = document.createElement('div');
        i.classList.add('box');
        gridContainer.appendChild(i);
    }
}

row();