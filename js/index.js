
const createAnagramsFromIdOfInput = inputId => {
    /** Sorting all the data in different way to handle them better */
    /** todo: Could improve read data by casting to string and sorting at the same time. Will reduce time ~Half  */
    const _anagrams_map = Utils.stringToArray( document.getElementById(inputId).value );
    const _anagrams_string_sorted_map = _anagrams_map.map(Utils.sortString);
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

    const _time = Date.now() - _start;
    console.log('Used ms, s', _time, _time / 1000);
    console.log('Anagrams Map', _anagrams_map);
    console.log('Anagrams Sorted', _anagrams_string_sorted_map);

    document.getElementById('anagramList').innerText = _anagrams_map.join('\n');
    document.getElementById('anagramList1').innerText = _anagrams.join('\n');
    document.getElementById('anagramList2').innerText = _anagrams_string_sorted_map.join('\n');
}