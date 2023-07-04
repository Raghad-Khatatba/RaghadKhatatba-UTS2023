const resultElement = document.getElementById('result');
let currentResult = '';
let currentOperator = '';

function updateResult() {
  resultElement.innerText = currentResult;
}

function clearResult() {
  currentResult = '';
  currentOperator = '';
  updateResult();
}

function performCalculation() {
  const num1 = parseFloat(currentResult);
  const num2 = parseFloat(resultElement.innerText);
  let newResult = 0;

  switch (currentOperator) {
    case '+':
      newResult = num1 + num2;
      break;
    case '-':
      newResult = num1 - num2;
      break;
    case '*':
      newResult = num1 * num2;
      break;
    case '/':
      newResult = num1 / num2;
      break;
  }

  currentResult = String(newResult);
  currentOperator = '';
  updateResult();
}

function handleButtonPress(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    if (currentOperator !== '') {
      performCalculation();
    }
    currentOperator = value;
    currentResult = resultElement.innerText;
    resultElement.innerText = '0';
  } else if (value === '=') {
    if (currentOperator !== '') {
      performCalculation();
    }
  } else if (value === 'C') {
    clearResult();
  } else {
    const currentValue = resultElement.innerText;
    if (currentValue === '0') {
      resultElement.innerText = value;
    } else {
      resultElement.innerText += value;
    }
  }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    handleButtonPress(button.innerText);
  });
});
