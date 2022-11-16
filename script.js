"use strict";

function createDivs(num) {
    const divWidth = Math.round((canvasWidth / num) * 100) / 100; // Adjust div width so exactly num divs fit in a row
    for(let i = 0; i < num**2; i++) { // Num is squared so we have a square canvas width same numbers of rows and columns
        const createdDiv = document.createElement("div");
        createdDiv.style.width = createdDiv.style.height = `${divWidth}px`;
        createdDiv.addEventListener("mouseover", mouseOver);
        containerDiv.appendChild(createdDiv);
    }
}

function mouseOver() {
    if (mousedown) {
        if (rainbow) {
            this.style.backgroundColor = getRandomColor();
        } else {
            this.style.backgroundColor = penColor;
        }
    }
}

function createNewCanvas() {
    const newChildNum = +prompt("Enter the number of pixels you want in the new canvas: ");
    if (newChildNum > 100) {
        alert("You can't enter numbers bigger then 100!");
    } else {
        while (containerDiv.hasChildNodes()) {
            containerDiv.removeChild(containerDiv.firstChild);
        }
        createDivs(newChildNum);
    }
}

function clearCanvas() {
    containerDiv.childNodes.forEach((childDiv) => {
        childDiv.style.backgroundColor = "white";
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const containerDiv = document.querySelector(".container");
const canvasWidth = +(containerDiv.clientWidth);

const colorPicker = document.querySelector("input");
const brushButton = document.querySelector(".brush");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");
const canvasButton = document.querySelector(".new-grid");


let penColor = colorPicker.value;
let rainbow = false;

let mousedown = false;
containerDiv.addEventListener("mousedown", () => {
    mousedown = true;
});
containerDiv.addEventListener("mouseup", () => {
    mousedown = false;
});

colorPicker.addEventListener("input", () => {
    penColor = colorPicker.value;
});
brushButton.addEventListener("click", () => {
    rainbow = false;
    penColor = colorPicker.value;
});
rainbowButton.addEventListener("click", () => {
    rainbow = true;
});
eraserButton.addEventListener("click", () => {
    rainbow = false;
    penColor = "white";
});
clearButton.addEventListener("click", clearCanvas);
canvasButton.addEventListener("click", createNewCanvas);

createDivs(20);
