let gridSize = 16;
let gridArea = gridSize * gridSize;
let mouseDown = false;

const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.getElementById("colorpicker");
const clearButton = document.getElementById("clear");
let brushColor = colorPicker.value;

gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

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
    gridContainer.replaceChildren();
    createGrid();
});

createGrid();

// Create the grid
function createGrid() {
    for (let i = 0; i < gridArea; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = "grid-item";
        gridItem.style.backgroundColor = "white";
        gridContainer.appendChild(gridItem);
    }

    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("mouseover", () => {
            if (mouseDown) {
                item.style.backgroundColor = brushColor;
            }
        });
        item.addEventListener("click", () => {
            item.style.backgroundColor = brushColor;
        })
    });
}    