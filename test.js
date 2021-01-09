const sampleWords = [
  "AMOR",
  "XISELA",
  "JAMON",
  "ROMA",
  "OMAR",
  "MORA",
  "ESPONJA",
  "RAMO",
  "JAPONES",
  "ARMO",
  "MOJAN",
  "MARO",
  "ORAM",
  "MONJA",
  "ALEXIS",
];

// assignment 1
function groupDuplicatedLetter(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const letters = [...words[i]];
    const sumASCII = letters.reduce((p, c) => p + c.charCodeAt(0), 0);
    if (result[sumASCII] && result[sumASCII].length === words[i].length) {
      result[sumASCII].word += " - " + words[i];
      continue;
    }

    result[sumASCII] = { word: words[i], letters, length: words[i].length };
  }

  console.log("Group duplicated Letter:");
  Object.values(result).forEach((obj) => console.log(obj.word));
}

// assignment 2
function reverseParenthesesWord(word) {
  const letters = [...word];
  const sampleWord = [];
  const sampleWordAfter = [];
  const reverseWord = [];
  const skipStack = [];

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "(") {
      skipStack.push(true);
      reverseWord.push([]);
      continue;
    }

    if (letters[i] === ")") {
      skipStack.shift();
      continue;
    }

    if (!skipStack.length && !reverseWord.length) {
      sampleWord.push(letters[i]);
    } else if (!skipStack.length && reverseWord.length) {
      sampleWordAfter.push(letters[i]);
    } else {
      reverseWord[skipStack.length - 1].push(letters[i]);
    }
  }

  console.log(
    sampleWord
      .concat(
        reverseWord.reduce((p, c) => {
          return p.concat(c.reverse());
        }, []),
        sampleWordAfter
      )
      .join("")
  );
}

groupDuplicatedLetter(sampleWords);
reverseParenthesesWord("foo(bar)");
reverseParenthesesWord("(bar)");
reverseParenthesesWord("foo(bar)blim");
reverseParenthesesWord("foo(foo(bar))blim");
