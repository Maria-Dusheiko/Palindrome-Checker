

 function palindrome() {
  let text = document.getElementById("palind").value
  text.innerHTML = text.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  let aux = text.split('');
 
   if (aux.join(' ') == aux.reverse().join(' ')){
      document.getElementById("answer").innerHTML = "It is palindrome!";
   } else {
      document.getElementById("answer").innerHTML = "It is not palindrome";
  }
  
}

