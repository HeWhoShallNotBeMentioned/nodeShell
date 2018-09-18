const fs = require('fs');

const fileContent = function (fileName) {
  fs.readFile(`${process.cwd()}/${fileName}`, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    process.stdout.write('prompt > ')
  });
}

module.exports = fileContent;
c
