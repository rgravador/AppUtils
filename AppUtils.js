const randomHexString = (length = 12) => {
    return [...Array(length)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

const occurenceCountOfLetterInString = (string) => {
    return string.split("").reduce((acc, letter) => {
        letter = letter.trim().toLowerCase();
        if (letter) acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {})
}