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


// Mouse/Coloring Events
let isMouseDown = false;

container.addEventListener('pointerdown', e => {
    isMouseDown = true;

    if (e.target.classList.contains('box')) {
        e.target.style.backgroundColor = "#1e1e1e";
    }
    e.preventDefault();  // Prevent text selection
})


container.addEventListener('pointerover', e => {
    if (isMouseDown && e.target.classList.contains('box')) {
        e.target.style.backgroundColor = "#1e1e1e";
    }
})


document.addEventListener('pointerup', () => {
    isMouseDown = false;
})


// Run
makeGrid(size);