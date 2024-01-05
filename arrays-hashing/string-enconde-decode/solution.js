/**
 * @param {string[]} strs
 * @return {string}
*/

function encode(strings) {
    let string = "";

    for (const str of strings) {
        string += str.length + "#" + str;
    }

    return string;
}

function decode(encodedString) {
    let strings = [], index = 0;

    while (index < encodedString.length) {
        let _index = index;

        while (encodedString[_index] !== "#") {
            _index += 1;
        }

        const _length = Number(encodedString.substring(index, _index));

        strings.push(encodedString.substring(_index + 1, _index + 1 + _length));

        index = _index + 1 + _length;
    }

    return strings;
}