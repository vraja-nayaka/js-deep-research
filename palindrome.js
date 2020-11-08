const palindrome = (str) => {

  for (let index = 0; index < Math.floor(str.length / 2); index++) {

    if (str[index] !== str[str.length - index - 1]) {
      return false;
    }
  }

  return true;
}

palindrome('anna');
palindrome('abcdcba');
palindrome('abcsgcba');
