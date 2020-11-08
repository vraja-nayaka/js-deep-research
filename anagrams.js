function anagrams(stringA, stringB) {
	const letters = [];
  const isLetter = (a) => a.toLowerCase() !== a.toUpperCase();
  
  for (charA of stringA) {
  	if (isLetter(charA)) {
    	letters.push(charA.toLowerCase());
    }
  }
  
  for (charB of stringB) {
  	if (isLetter(charB)) {
    	if (letters.includes(charB.toLowerCase())) {
      	letters.splice(letters.indexOf(charB.toLowerCase()), 1);
      } else {
      	return false;
      }
    }
  }
  
  return true;
}
