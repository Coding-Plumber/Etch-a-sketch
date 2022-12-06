function populateBoard(size) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove()); // removes coloured squares when resized

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // assigning gridTemplateColumns = 16spaces / by itself
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; // fr stands for fraction, such as 1 fraction = 100% 2 fra be 50%

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.classList.add("grid-square");
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', square); // places square 'beforeend': Just inside the targetElement, after its last child.
    }
}

populateBoard(16);

function changeSize(input) { // entered the function to the HTML allowing it to change 
    if(input >= 1 && input <= 50) {
        populateBoard(input);
    } else {
        alert("Enter value between 1-50");
    }
    
}

function colorSquare() {
    this.style.backgroundColor = "black";
}

function resetGrid() {
    let board = document.querySelector('.grid');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
    }






