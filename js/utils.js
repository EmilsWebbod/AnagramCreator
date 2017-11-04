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
    stringToArray: string => typeof string === 'string' ? string.split(MyRegExp.newWord) : [],
    sortString: string => string.split('').sort().join('')
}

