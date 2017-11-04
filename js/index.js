
const createAnagramsFromIdOfInput = inputId => {
    /** Sorting all the data in different way to handle them better */
    /** todo: Could improve read data by casting to string and sorting at the same time. Will reduce time ~Half  */
    const _anagrams_map = Utils.stringToArray( document.getElementById(inputId).value );
    const _anagrams_string_sorted_map = _anagrams_map.map(Utils.sortString);
    const _start = Date.now();

    const _anagrams = _anagrams_map.map((anagram, a_i) => {
        if ( anagram.length === 1 ) { return; }
        let other = '';
        const match = _anagrams_string_sorted_map[a_i];
        const isAnagram = Utils.stringSortedContainsCharacters(match);
        _anagrams_string_sorted_map.forEach((sorted_anagram, s_a_i) => {
            // If the same anagram. No use to check if anagram of itself
            if (s_a_i === a_i) { return; }
            // There should be no anagrams if the anagram we are trying to match is shorter
            if (anagram.length > sorted_anagram.length) { return; }
            
            if ( isAnagram(sorted_anagram) ) {
                /** Check if characters in anagram are the same order. If same order its the same anagram so return  */
                if (Utils.matchStringForCharactersInSameOrder(anagram)(_anagrams_map[s_a_i])) { return; }
                /** Take out all the characters in matched that do not contain in our anagram */
                let keep = Utils.keepCharacterInString(_anagrams_map[s_a_i])(anagram);
                /** Check if anagram has already been added. */
                if (other.indexOf(keep) !== -1) { return; }
                /** Success: Add anagram */
                other += keep + ' '; 
                return;
            }
        })
        /** Return the anagram list of Anagram */
        return other;
    })

    const _time = Date.now() - _start;
    console.log('Used ms, s', _time, _time / 1000);
    console.log('Anagrams Map', _anagrams_map);
    console.log('Anagrams Sorted', _anagrams_string_sorted_map);

    document.getElementById('anagramList').innerText = _anagrams_map.join('\n');
    document.getElementById('anagramList1').innerText = _anagrams.join('\n');
    document.getElementById('anagramList2').innerText = _anagrams_string_sorted_map.join('\n');
}