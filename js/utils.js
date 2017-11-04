'use strict';

const MyRegExp = {
    newWord: /\s+/g
}

/** Some functions we may use more than once over the course of this project */
const Utils = {
    /**
     * Will return array from string splited with " "
     * Remove all that is empty string
     * String => Array<String>
     */ 
    stringToArray: string => string.split(MyRegExp.newWord),
    sortString: string => string.split('').sort().join(''),
    sortStringInArray: array => array.map(Utils.sortString),

    /**
     * Check if string c (contains) characters in string s
     * String needs to be sorted to work correctly.
     * String => String => Boolean
     */
    stringSortedContainsCharacters: s => c => {
        let contains = 0;
        let last_found = 0;
        /** We check all the characters of string and see if it matches our characters is string c. */
        for(let s_i = 0; s_i < s.length; s_i++) {
            const last = contains;
            for(let c_i = last_found; c_i < c.length; c_i++) {
                if (s[s_i] === c[c_i]) {
                    contains++;
                    last_found = c_i + 1;
                    break;
                }
                if (c_i === 0 && contains === 0) { break; }
            }
            if (contains === 0 || last === contains) { break; }
        }
        if (contains === s.length) { return true; }
        return false;
    },

    matchStringForCharactersInSameOrder: s1 => s2 => {
        if (s1 === '' || s2 === '') return true;
        let matches = 0;
        let last_match_i = 0;
        for (let s1_i = 0; s1_i < s1.length; s1_i++) {
            for (let s2_i = last_match_i; s2_i < s2.length; s2_i++) {
                if (s1[s1_i] === s2[s2_i]) {
                    matches++;
                    last_match_i = s2_i + 1;
                    break;
                }
            }
        }
        if (matches === s1.length) { return true; }
        return false;
    },

    /**
     * Will strip the string of the unnecessary characters.
     * Matching the keep string 1 character at a time and remove all other characters we dont want
     */
    // String => String => String
    keepCharacterInString: s => keep => {
        let _keep_i = Array(s.length).map(x => false);
        for(let k_i = 0; k_i < keep.length; k_i++) {
            for(let s_i = 0; s_i < s.length; s_i++) {
                if (keep[k_i] === s[s_i]) {
                    if (!_keep_i[s_i]) { _keep_i[s_i] = true; break; }
                }
            }
        }
        return s.split('').map((x, i) => _keep_i[i] ? x : '').join('');
    }
}

