// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString (strng) {
    if(strng==""){return "1"}
    word = strng.split("")
    len = word.length
    endNum = [];
    count = 0
    // if the end of the word ends in a number get all the numbers
    if(word[len-1].match(/[0-9]/)){
        for(i = 1; i < len + 1; i++){
            if(word[len-i].match(/[0-9]/)){
                endNum.unshift(word[len-i]);
                count++;
            }
        }
        num = parseInt(endNum.join("")) + 1;
        finalNum = String(num).padStart(count, '0');
        word.splice(-count, count, finalNum);       
    } else {
        return strng+1;
    }
    return word.join("");
}

console.log("foobar007", incrementString("foobar007"));
console.log("foo", incrementString("foo"));
console.log("", incrementString(""));
console.log("foobar099", incrementString("foobar099"));
console.log("1", incrementString("1"));
