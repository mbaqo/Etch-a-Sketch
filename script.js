function createGrid() {
    const gridContainer = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        for (let j = 0; j < 16; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("box");
            gridRow.appendChild(gridBox);
        }
        gridContainer.appendChild(gridRow);
    }
}

createGrid();