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

// Function to check if number n is pentagonal
function isPentagonal(n) {
    let root = (1+24*n) ** 0.5;
    return ((1+root)/6) % 1 == 0;
}

/*
    Function to return the next number which is triangular, pentagonal
    and hexagonal.
    triPentaHexa(40756) returns 1533776805

*/
function triPentaHexa(n) {
    let num = nearestHexagonal(n) + 1;
    let hexNum = hexagonal(num);
    while (!isPentagonal(hexNum)) {
        num += 1;
        hexNum = hexagonal(num);
    }
    return hexNum;
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}