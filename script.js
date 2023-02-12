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

gridSizeSlider.addEventListener("input", () => (createGrid(gridArea)));
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
colorPicker.addEventListener("input", () => (brushColor = colorPicker.value));
clearButton.addEventListener("click", () => (createGrid(gridArea)));

// Create the grid
function createGrid(gridArea) {
    gridContainer.replaceChildren();
    gridSize = gridSizeSlider.value;
    gridSizeValue.textContent = gridSize + " x " + gridSize;
    gridArea = gridSize * gridSize;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridArea; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = "grid-item";
        gridItem.style.backgroundColor = "white";
        gridContainer.appendChild(gridItem);
    }

    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("mousedown", () => {
            item.style.backgroundColor = brushColor;
        });
        item.addEventListener("mouseover", () => {
            if (mouseDown) {
                item.style.backgroundColor = brushColor;
            }
        });
    });
}    