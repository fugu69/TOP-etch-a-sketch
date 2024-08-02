const container = document.querySelector(".container");

let rowsNumber = prompt("How many rows to set (from 2 to 100?");
if (rowsNumber > 100) {
    rowsNumber = 100;
    alert("Maximum amount of rows is exceeded!");
} else if (rowsNumber < 2) {
    rowsNumber = 2;
    alert("Minimum amount of rows is exceeded!");
}

for(let row = 0; row < (rowsNumber); row++){
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
    for(let cell = 0; cell < rowsNumber; cell++){
        const cell = document.createElement("div")
        // cell.innerHTML = "div";
        cell.className = "cell";
        row.appendChild(cell);
    }
}

console.log(rowsNumber);