// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline
  const workingDirectory = process.cwd();

  if (cmd === 'pwd') {
    process.stdout.write(workingDirectory);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt >');
});

