// A little weird green frog speaks in a very strange variation of English: 
// it reverses sentence, omitting all puntuation marks , ; ( ) - 
// except the final exclamation, question or period. We urgently need help 
// with building a proper translator. To simplify the task, we always use lower-case 
// letters. Apostrophes are forbidden as well.

// Translator should be able to process multiple sentences in one go. Sentences 
// are separated by arbitrary amount of spaces.

// Examples

// you should use python. -> python use should you.

// look, a fly! -> fly a look!

// multisentence is good. is not it? -> good is multisentence. it not is?

const solution = (str) => {
    str.split(' ').reverse().join(' ');
}

solution('you should use python');