
 const workingDirectory = process.cwd()

 module.exports = function () {
   process.stdout.write(workingDirectory);
   process.stdout.write('\nprompt >')
 }