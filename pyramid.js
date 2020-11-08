//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	for (let i = 1; i <= n; i++) {
  	let result = '';
    let width = n * 2 - 1;
    
    for (let j = 0; j < width; j++) {
    	const spaces = n - i;
    	if (j < spaces || j > width - spaces - 1) {
      	result += ' ';
      } else {
      	result += '#';
      }
    }
    
    console.log(result);
  }
}
