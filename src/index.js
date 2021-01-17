import readlineSync from 'readline-sync';

export default (descriptionGame, getDataAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(descriptionGame);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [data, correctAnswer] = getDataAndCorrectAnswer();
    console.log(`Question: ${data}`);
    const answer = readlineSync.question('Your answer: ');
    const printCorrectAnswer = (correct) => {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${nameUser}!'`);
    };
    if (correctAnswer === answer) {
      console.log('Correct');
    } else {
      printCorrectAnswer(correctAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};
