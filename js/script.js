// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${triPentaHexa(40756)}. <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}

// Function to return nth hexagonal number
function hexagonal(n) {
    return n * ((2*n) - 1);
}

// Function to get the nearest hexagonal (returns a number)
function nearestHexagonal(n) {
    return parseInt((Math.sqrt(8*n+1)+1)/4);
}