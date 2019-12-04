// Function beeps after a specified amount of time (passed via command line) has passed.
// Guards against if no numbers are provided, if input is negative number and if input is not a number.
  
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  // process.stdout.write(key);
  if (key === '\u0003') {
    process.exit(console.log("\nThanks for using me, ciao!"));
  }

  const inp = Number(key);

  if (key === 'b') {
    process.stdout.write('\x07')
  } else if (!isNaN(inp) && inp >= 1 && inp <= 9) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, key * 1000)
    console.log(`setting timer for ${inp} seconds...`);
  }

});

console.log('after callback');




// stdin.on('data', (key) => {
//   process.stdout.write(key);
//   if (key === 'b') {
//     process.stdout.write('\x07');
//   }
// });

// console.log('after callback');

// const args = process.argv.slice(2);

// function timer() {
//   if (args.length === 0) {
//     return;
//   }
//   for (el of args) {
//     const number = Number(el);    
//     if (!isNaN(number) && el >= 0) {
//       setTimeout(() => {
//         process.stdout.write('\x07')
//       }, el * 1000) // 
//     }
    
//   }        
// }
// timer();

