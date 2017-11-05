
const createAnagramsFromIdOfInput = inputId => {
    // Just benchmarking this
    const _start = Date.now();
    /** Sorting all the data in different way to handle them better */
    /** todo: Could improve read access by casting to string and sorting at the same time. */
    const _anagrams_map = Utils.stringToArray( document.getElementById(inputId).value );
    /** Sorting strings in Anagram list and saving index */
    const _anagrams_string_sorted_map = _anagrams_map.map((x, i) => [i, Utils.sortString(x)]);
    /** List of anagram sorted. saved old index in [0] and storted anagram as [1] */
    const _anagrams_sorted_map = _anagrams_string_sorted_map.sort(Utils.sortArrayByIndexOfArray(1));
    /** Our list of matcing anagrams. Matching index to _anagrams_map */
    const _anagrams = Array(_anagrams_map.length).fill('');
    
    console.log('Data Sorted', Date.now() - _start);
    
    /** 
     * Simply loop through Sorted anagrams and check the next index. If match add as anagram and mirror
     * Keep checking until no match.
     */
    for(let i = 0; i < _anagrams_sorted_map.length-1; i++) {
        let shift = i + 1;
        while (_anagrams_sorted_map[i][1] === _anagrams_sorted_map[shift][1]) {
            _anagrams[_anagrams_sorted_map[i][0]] += _anagrams_map[_anagrams_sorted_map[shift][0]] + ' ';
            _anagrams[_anagrams_sorted_map[shift][0]] += _anagrams_map[_anagrams_sorted_map[i][0]] + ' ';
            shift++; 
        }
    }

    // Around 15ms on my comp. 1139 words
    const _time = Date.now() - _start;
    console.log('Used ms, s', _time, _time / 1000);

    document.getElementById('anagramList').innerHTML = 
        `<tr><th>Anagram</th><th>Matching Anagrams</th>` + _anagrams_map.map((x, i) =>
        `<tr>
            <td>${x}</td>
            <td>${_anagrams[i]}</td>
        </tr>` ).join('');
}
