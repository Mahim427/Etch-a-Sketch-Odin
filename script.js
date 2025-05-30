const container = document.querySelector('.container');
const newBtn = document.querySelector('#new');
const eraseBtn = document.querySelector('#erase');

let size = 20;


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


function increaseBoxOpacity(box) {
    const currentBg = window.getComputedStyle(box).backgroundColor;
    const currentAlpha = parseFloat(currentBg?.split(", ")[3]);

    // this won't run if currentAlpha is NaN
    if (isFinite(currentAlpha)) {
        const newAlpha = Math.min(currentAlpha + 0.1, 1).toFixed(1);
        return `rgba(0, 0, 0, ${newAlpha})`;
    }

    return currentBg;
}


newBtn.addEventListener('click', () => {
    let newSize;
    do {
        newSize = +prompt("Number of square per side (1-100).");

        if (newSize === 0)  // Checks for prompt cancellation
            return;

    } while (newSize < 1 || newSize > 100);

    container.textContent = '';  // Clear the container
    size = newSize;
    makeGrid(size);
})


eraseBtn.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = '';
    });
})


// Mouse/Coloring Events
let isMouseDown = false;

container.addEventListener('pointerdown', e => {
    isMouseDown = true;

    if (e.target.classList.contains('box')) {
        e.target.style.backgroundColor = increaseBoxOpacity(e.target);
    }
    e.preventDefault();  // Prevent text selection
})


container.addEventListener('pointerover', e => {
    if (isMouseDown && e.target.classList.contains('box')) {
        e.target.style.backgroundColor = increaseBoxOpacity(e.target);
    }
})


document.addEventListener('pointerup', () => {
    isMouseDown = false;
})


// Run
makeGrid(size);