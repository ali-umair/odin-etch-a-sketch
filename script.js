const gridContainer = document.querySelector('.grid-container');

for(let i = 1; i<257; i++) {
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    gridContainer.appendChild(grid);
}