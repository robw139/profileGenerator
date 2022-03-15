
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});





rl.question('What is your name : ', (answer1) => {     
  rl.question('what is an activity you like doing : ', (answer2) => {         
    rl.question('What do you listen to while doing that : ', (answer3) => { 
      rl.question('What is you favourite meal of the day : ', (answer4) => {      
        console.log(`${answer1} loves ${answer2} while listening to ${answer3} before having a wonderful ${answer4}`);         
        rl.close();     
      }); 
    });
  }); 
});

