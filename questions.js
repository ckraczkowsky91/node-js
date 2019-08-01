//two additional properties of the global process object are
// standard input (stdin) and standard output (stdout) which
// can be used to read and write data from the terminal
process.stdin;
//using stdout to write to the terminal with it's write() method
// which will write to a single line unlike console.log
process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
];

const ask = (i=0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];
//using stdin to listen for answers to the questiond
// the on method allows us to listen for events requires 2 parameters
// first parameter is the event that we are listening for. in this case data which is triggered when the user enters something
// second parameter is the function that we will use to handle that event
process.stdin.on('data', data => {
  answers.push(data);

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  const[name, activity, lang] = answers;
  console.log(`

  Thank you for your answers.

  Go ${activity} ${name} you can write ${lang} code later!

    `);
});
