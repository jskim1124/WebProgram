const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printMultiplicationTable() {
  rl.question('숫자를 입력하세요: ', (dan) => {
    console.log(`${dan}단 시작`);
    for (let i = 1; i <= 9; i++) {
      console.log(`${dan} x ${i} = ${dan * i}`);
    }
    rl.close();
  });
}

printMultiplicationTable();