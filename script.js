// Modal Toggle
function toggleModal() {
    const modal = document.querySelector(".modal-container");
    // document.querySelector("#reset-btn").addEventListener("click", (e) => {
    //     e.preventDefault();
    //     modal.classList.remove("hidden")
    // });
    // document.querySelector("#create-btn").addEventListener("click", (e) => {
    //     e.preventDefault();
    //     modal.classList.add("hidden")
    // });
    document.querySelectorAll(".modal-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.toggle("hidden")
    });
    })
}



// Make Grid
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

// Hover Feature
function changeBackgroundOnHover() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.addEventListener("mouseover", (e) => {
        box.style.backgroundColor = "blue";
    }));
}

createGrid();
changeBackgroundOnHover();
toggleModal();