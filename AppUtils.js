/**
 * 
 * @param {*} length of the string
 * @returns a random string
 */
const randomHexString = (length = 12) => {
    return [...Array(length)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

/**
 * 
 * @param {*} string to count
 * @returns an object with letters as keys and counts as values
 */
const occurenceCountOfLetterInString = (string) => {
    return string.split("").reduce((acc, letter) => {
        letter = letter.trim().toLowerCase();
        if (letter) acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {})
}
/**
 * 
 * @param {*} string source
 * @param {*} toFind string that we are looking for
 * @param {*} replacement string to replace
 * @returns a string with the replacements
 * Note: Regex => gi means case-insensitive
 *       Regec => g  means case-sensitive
 */
const textReplace = (string, toFind, replacement) => {
    var regex = new RegExp(toFind, "gi");
    return string.replace(regex, replacement);
}

/**
 * @function sanitize
 * @description prevent xss ingestion
 * @param {string} str
 */
const sanitize = (str) => {
    return str.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
console.log(sanitize('hello world > dhjkfa'))