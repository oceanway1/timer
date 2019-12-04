// Function beeps after a specified amount of time (passed via command line) has passed.
// Guards against if no numbers are provided, if input is negative number and if input is not a number.
  
const args = process.argv.slice(2);

function timer() {
  // this is called early return.
  if (args.length === 0) {
    return;
  }
  for (el of args) {
    const number = Number(el);    
    if (!isNaN(number) && el >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, el * 1000) // 
    }
    
  }        
}
timer();


