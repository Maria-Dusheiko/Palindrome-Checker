function palindrome(str) {
  const string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  const aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }
 
  return false;
}
