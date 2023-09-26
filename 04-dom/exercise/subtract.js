function subtract() {
    const firstNUm = document.getElementById("firstNumber").value;
    const secNum = document.getElementById("secondNumber").value;
    const sum = Number(firstNUm) - Number(secNum);
    document.getElementById("result").textContent = sum; 
}