"use strict";

function createDivs(num) {
    const divWidth = Math.floor(canvasWidth / num); // Adjust div width so exactly num divs fit in a row
    for(let i = 0; i < num**2; i++) { // Num is squared so we have a square canvas width same numbers of rows and columns
        const createdDiv = document.createElement("div");
        createdDiv.style.width = createdDiv.style.height = `${divWidth}px`;
        createdDiv.addEventListener("mouseover", mouseOver);
        createdDiv.addEventListener("mouseout", mouseOut);
        containerDiv.appendChild(createdDiv);
    }
}

function mouseOver() {
    this.classList.add("hover");
}

function mouseOut() {
    this.classList.remove("hover");
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

const containerDiv = document.querySelector(".container");
const canvasWidth = +(containerDiv.clientWidth);
const canvasButton = document.querySelector("button");
canvasButton.addEventListener("click", createNewCanvas);
createDivs(10);
