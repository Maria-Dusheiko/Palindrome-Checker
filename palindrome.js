

 function palindrome() {
    let text = document.getElementById("palind").value
   
    text.innerHTML = text;
    let aux = text.toLowerCase().split(/[^a-z0-9]/gi).join('').split('');
     
   if (aux == ""){
      document.getElementById("answer").innerHTML = "You didn't enter text!";
   } else if (aux.join('') == aux.reverse().join('')) {
      document.getElementById("answer").innerHTML = "It is palindrome!";
   } else  {
      document.getElementById("answer").innerHTML = "It is not palindrome!";
   }
  
}

