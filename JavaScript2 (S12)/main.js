function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return;
    }

    const result = num1 * num2;
    document.getElementById('result').innerText = result;
  }
  function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter numbers');
      return;
    }

    if (num2 === 0) {
      alert('Cannot divide by zero');
      return;
    }

    const result = num1 / num2;
    document.getElementById('result').innerText = result;
  }

  function convert() {
    let c = parseFloat(document.getElementById('C').value);
    let f = parseFloat(document.getElementById('F').value);
    let result = 0;
    let finalResult='';
  
    if (isNaN(c) && isNaN(f)) {
      alert('Please enter Fahrenheit or Celsius');
      return;
    }
  
    if (isNaN(c) && !isNaN(f)) {
      result = (f - 32) / 1.8;
      finalResult=f +"F " +"is " +result +"C";
      document.getElementById('C').value = result;
    }
  
    if (isNaN(f) && !isNaN(c)) {
      result = c * 1.8 + 32;
      finalResult=c +"C " +" is " + result +"F";
      document.getElementById('F').value = result;
    }
    if (!isNaN(f) && !isNaN(c)) {
        finalResult=c +"C " +" is " + f +"F";
      }
    document.getElementById('result2').innerText = finalResult;
  }
  