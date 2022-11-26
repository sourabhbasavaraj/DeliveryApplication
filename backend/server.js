// const greet = (name) => {
//     console.log(`Hello, and welcome to ${name}`);
// }

// greet('Sourabh');

const os = require('os');

console.log(os.homedir());

const fs = require('fs');

fs.readFile('./demo.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})