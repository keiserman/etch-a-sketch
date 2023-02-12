const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.getElementById("colorpicker");
const clearButton = document.getElementById("clear");
const gridSizeSlider = document.getElementById("grid-size");
const gridSizeValue = document.getElementById("grid-size-value");
const rainbowModeCheckbox = document.getElementById("rainbowmode");

let gridSize = 16;
let gridArea = gridSize * gridSize;
let mouseDown = false;
let brushColor = colorPicker.value;
let rainbowMode = false;

rainbowModeCheckbox.addEventListener('change', e => {
    if(e.target.checked === true) {
        rainbowMode = true;
    }
    if(e.target.checked === false) {
        rainbowMode = false;
    }
});

getRainbowColor = () => (brushColor = "#" + Math.floor(Math.random()*16777215).toString(16));

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
            if (rainbowMode) {
                getRainbowColor();
                item.style.backgroundColor = brushColor;
            } else {
                brushColor = colorPicker.value;
                item.style.backgroundColor = brushColor;
            }
        });
        item.addEventListener("mouseover", () => {
            if (mouseDown) {
                if (rainbowMode) {
                    getRainbowColor();
                    item.style.backgroundColor = brushColor;
                } else {
                    brushColor = colorPicker.value;
                    item.style.backgroundColor = brushColor;
                }
            }
        });
    });
}    