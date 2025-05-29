const container = document.querySelector('.container');
const newBtn = document.querySelector('#new');
const eraseBtn = document.querySelector('#erase');

let size = 4;


function makeGrid(gridSize) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.style.width = `calc(100% / ${gridSize}`;
        box.classList.add('box');
        fragment.appendChild(box);
    }

    container.appendChild(fragment);
}

// Run
makeGrid(size);