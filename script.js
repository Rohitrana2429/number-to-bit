function convertToBinary() {
    const inputElement = document.getElementById("inputNumber");
    const resultElement = document.getElementById("result");
  
    const inputValue = parseInt(inputElement.value);
    if (!isNaN(inputValue)) {
      const binaryValue = inputValue.toString(2);
      resultElement.textContent = `Binary representation: ${binaryValue}`;
    } else {
      resultElement.textContent = "Please enter a valid integer.";
    }
  }
  