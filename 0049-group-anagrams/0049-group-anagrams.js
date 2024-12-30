var groupAnagrams = function(strs) {
    let map = new Map();

    for (let s of strs) {
        let sortedvalue = s.split('').sort().join('');
        if (!map[sortedvalue]) {// is key that presents the elemet s from strs array not exist?

            map[sortedvalue] = [];//then put it in mp as key so map["aet"]=[]==> in first iteration
        }
        map[sortedvalue].push(s); // push that array into map
    }

    return Object.values(map);    // convert map values into array and return it
};