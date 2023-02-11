const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.getElementById("colorpicker");
const clearButton = document.getElementById("clear");
const gridSizeSlider = document.getElementById("grid-size");
const gridSizeValue = document.getElementById("grid-size-value");

let gridSize = 16;
let gridArea = gridSize * gridSize;
let mouseDown = false;
let brushColor = colorPicker.value;

createGrid(gridArea);

gridSizeSlider.addEventListener("input", function() {
    gridSize = this.value;
    gridSizeValue.textContent = gridSize;
    gridArea = gridSize * gridSize;
    createGrid(gridArea);
});

document.body.onmousedown = function() { 
    mouseDown = true;
}

document.body.onmouseup = function() {
    mouseDown = false;
}

colorPicker.addEventListener("input", function() {
    brushColor = colorPicker.value;
});

clearButton.addEventListener("click", function() {
    createGrid(gridArea);
});

// Create the grid
function createGrid(gridArea) {
    gridContainer.replaceChildren();
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridArea; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = "grid-item";
        gridItem.style.backgroundColor = "white";
        gridContainer.appendChild(gridItem);
    }

    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("click", () => {
            item.style.backgroundColor = brushColor;
        });
        item.addEventListener("mouseover", () => {
            if (mouseDown) {
                item.style.backgroundColor = brushColor;
            }
        });
    });
}    