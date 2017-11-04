
const createAnagramsFromIdOfInput = inputId => {
    /** Sorting all the data in different way to handle them better */
    /** todo: Could improve read access by casting to string and sorting at the same time. Will reduce time ~Half  */
    const _anagrams_map = Utils.stringToArray( document.getElementById(inputId).value );
    /** todo: Could sort array after alphabetical order and stop when first character do not match. */
    const _anagrams_string_sorted_map = _anagrams_map.map(Utils.sortString);
    // Just benchmarking this
    const _start = Date.now();

    const _anagrams = _anagrams_map.map((anagram, a_i) => {
        if ( anagram.length === 1 ) { return; }
        let anagram_string = '';
        const match = _anagrams_string_sorted_map[a_i];
        _anagrams_string_sorted_map.forEach((sorted_anagram, s_a_i) => {
            // If the same anagram. No use to check if anagram of itself
            if (s_a_i === a_i) { return; }
           
            if ( match === sorted_anagram ) {
                anagram_string += _anagrams_map[s_a_i]  + ' ';
            }
        })
        /** Return the anagram list of anagrams */
        return anagram_string;
    })

    // Around 40ms on my comp. 1140 words
    const _time = Date.now() - _start;
    console.log('Used ms, s', _time, _time / 1000);
    console.log('Anagrams Map', _anagrams_map);
    console.log('Anagrams Match', _anagrams);
    console.log('Anagrams Sorted', _anagrams_string_sorted_map);

    document.getElementById('anagramList').innerText = _anagrams_map.join('\n');
    document.getElementById('anagramListMatch').innerText = _anagrams.join('\n');
}
