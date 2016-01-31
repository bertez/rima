'use strict';

const debug = require('debug')('rima');
const syl = require('gl-syllabler');
const _ = require('lodash');
let lex;

debug('Init');

const getVowels = (syllables) => {
    if(!Array.isArray(syllables)) {
        syllables = [syllables];
    }

    return syllables.map(s => s.replace(/[^aeiouáéíóú]/g, ''))
};

const isRhymeConsontant = (w1, w2) => {
    const sw1 = w1.syllables ? w1 : syl(w1);
    const sw2 = w2.syllables ? w2 : syl(w2);

    return (sw1.word.slice(sw1.accentedPosition) === sw2.word.slice(sw2.accentedPosition));
};

const isRhymeAssonant = (w1, w2) => {
    const sw1 = w1.syllables ? w1 : syl(w1);
    const sw2 = w2.syllables ? w2 : syl(w2);

    return (sw1.word[sw1.accentedPosition] === sw2.word[sw2.accentedPosition])
        && (sw1.syllables.slice(sw1.tonicSyllable).length === sw2.syllables.slice(sw2.tonicSyllable).length)
        && (_.difference(getVowels(sw1.syllables.slice(sw1.tonicSyllable + 1)), getVowels(sw2.syllables.slice(sw2.tonicSyllable + 1))).length === 0);
};

const isRhyme = (w1, w2) => {
    return isRhymeConsontant(w1, w2) || isRhymeAssonant(w1, w2);
}

const getConsonantRhymes = (word) => {
    const sw = syl(word);

    if(!lex) {
        setLex();
    }

    return _.unique(lex.filter(w => isRhymeConsontant(sw, w) && w !== sw.word));
};

const getAssonantRhymes = (word) => {
    const sw = syl(word);

    if(!lex) {
        setLex();
    }


    return _.unique(lex.filter(w => isRhymeAssonant(sw, w) && w !== sw.word));
};

const getRhymes = (word) => {
    return {
        consonant: getConsonantRhymes(word),
        assonant: getAssonantRhymes(word)
    };
}

const setLex = (l) => {
    lex = l || require('./lex/words.json');
}

module.exports = {
    setLex,
    isRhymeConsontant,
    isRhymeAssonant,
    isRhyme,
    getConsonantRhymes,
    getAssonantRhymes,
    getRhymes
};