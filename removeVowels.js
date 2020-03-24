function disemvowel(str) {
    const myArr = str.split("");
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    const noVowels = myArr.filter(letter => !vowels.includes(letter));
    return noVowels.join("");
}

console.log(disemvowel("Hello"));