//process object is a glboal object
//this prints the process id
console.log(process.pid);
//this prints the version of Node.js being used to run this process
console.log(process.versions.node);
//we can collect information from the terminal
//print the arguments sent to the process
console.log(process.argv);
//because the process.argv property is an array we can add additional arguments to it
const [,, firstName, lastName] = process.argv;
console.log(`You name is ${firstName} ${lastName}`);

const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`)
