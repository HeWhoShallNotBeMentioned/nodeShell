let pwd = require('./pwd')
let ls = require('./ls')
let cat = require('./cat')


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.slice(0, 3) === 'cat') {
    let fileName = cmd.slice(4);
    cat(fileName);
  }
  else {
    process.stdout.write(`error: ${cmd} is not a function`);
    process.stdout.write('\nprompt > ')
  }
});

