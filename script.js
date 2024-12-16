function checkVowels() {
    let inputText = document.getElementById('inputText').value;
    let resultDiv = document.getElementById('result');
    let errorDiv = document.getElementById('error');
    let info = document.getElementById('info');
    resultDiv.textContent = '';
    errorDiv.textContent = '';
   info.textContent = '';

    if (!inputText) {
      errorDiv.textContent = 'Please enter some text.';
      return;
    }

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let i = 0; i < inputText.length; i++) {
      if (vowels.includes(inputText[i])) {
        count++;
        document.getElementById('ok').style.display = "inline";
        document.getElementById('check').style.display = "none";
      }
    }
    document.getElementById('inputText').value = "";

    info.textContent = 'The number of vowels Found in "'+ inputText +'" is ' + count;
    resultDiv.textContent = 'Number of vowels: ' + count;
  }
  function refresh(){
    window.location.reload()
  }
