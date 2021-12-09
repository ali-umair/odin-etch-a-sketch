const gridContainer = document.querySelector('.grid-container');
const root = document.querySelector(':root');
const columnSize = +prompt("Enter the size of column (1-100):");


// var rootStyles = getComputedStyle(root);
// var columnSize1= rootStyles.getPropertyValue('--column');    --to fetch CSS Variables
// console.log(columnSize1); 


root.style.setProperty('--column', `${columnSize}`);


for(let i = 0; i<columnSize*columnSize; i++) {
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    gridContainer.appendChild(grid);

    grid.addEventListener('mouseenter', (e) => {
        grid.style.backgroundColor = "black"
    })
}