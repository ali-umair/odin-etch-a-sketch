const gridContainer = document.querySelector('.grid-container');

for(let i = 0; i<256; i++) {
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    gridContainer.appendChild(grid);

    grid.addEventListener('mouseenter', (e) => {
        grid.style.backgroundColor = "black"
    })
}