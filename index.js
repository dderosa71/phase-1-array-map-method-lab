const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 
function capitalizeOneWord(word){
  word.toLowerCase()
  return `${word[0].toUpperCase()}${word.slice(1)}`
}

function capitalize(line){
  let splitWords = line.split(" ");
  return splitWords.map(word => capitalizeOneWord(word))
                   .join(" ")
    }

const titleCased = (input) => {
  return tutorials.map(line => capitalize(line));
}

