# Rima
Find rhyming words in **galician** language

## Install

`npm install rima`

## Usage
```js
const rima = require(rima);

rima.isRhymeConsonant('palabra', 'cabra'); //true
rima.getConsonantRhymes('palabra'); // ['abra', 'abracadabra', 'cabra', 'labra', 'glabra', 'macabra', 'apalabra', 'entreabra', 'enxabra', 'reabra']

//See API section below for more methods...
```

## API

Method | Description |
---------|---------------|
setLex(*lex*) | Defines an optional *lex* of words. The lex must be an array of words.
isRhymeConsontant(*word1, word2*) | Returns true if *word1* and *word2* have consonant rhyme.
isRhymeAssonant(*word1, word2*) | Returns true if *word1* and *word2* have assonant rhyme.
isRhyme(*word1, word2*) | Returns true if *word1* and *word2* have assonant or consonant rhyme.
getConsonantRhymes(*word*) | Returns an array of words that have consonant rhyme with *word*.
getAssonantRhymes(*word*) | Returns an array of words that have assonant rhyme with *word*.
getRhymes(*word*) | Returns an object with the consonant and assonant array of words that have rhyme with *word*.

# License

MIT.

(c) Berto Yáñez, 2016 [@bertez](https://twitter.com/bertez)