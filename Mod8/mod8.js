console.clear()
// const fs = require('fs')
// let data = "console.clear()\n"

// for (let i = 0; i < 10; i++)
// fs.writeFile(`Mod8/task${i+1}.js`, data, (err) => { 
//     if (err) throw err; 
// }) 
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter amount in dollars: ", (answer) => {
  let rub = answer * 77
  console.log(`${answer} USD in rubles is ${rub}`)
  process.exit()
})