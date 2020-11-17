// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

function encrypt(text, n) {
    if(text == null) { return null };
    while( n > 0 ){
        let i = 0;
        const first = [], second = [];
        arr = text.split('');

        arr.forEach(letter => {
            (i % 2 == 0) ? second.push(letter) : first.push(letter);
            i++;
        })
        text = first.concat(second).join('');
        n--;
    }
    return text;  
}

function decrypt(encryptedText, n) {
    if(encryptedText == null) { return null };
    while( n > 0 ){
        const arr = encryptedText.split('');
        const first = arr.splice(Math.floor(encryptedText.length/2))
        const second = arr.splice(0, Math.floor(encryptedText.length/2))
        const decrypted = first.map(function(el, i){
            return [el, second[i]];
        });
        encryptedText = [].concat.apply([], decrypted).join('');
        n--;
    }
    return encryptedText;
}

encrypt("", 0) // ""
encrypt("This is a test!", 0) // "This is a test!"
encrypt("This is a test!", 1) // "hsi  etTi sats!"
encrypt("This is a test!", 2) // "s eT ashi tist!"
encrypt("This is a test!", -1) // "This is a test!"

decrypt("", 0) // null
decrypt("This is a test!", 0) // "This is a test!"
decrypt("hsi  etTi sats!", 1) // "This is a test!"
decrypt("s eT ashi tist!", 2) // "This is a test!"
decrypt("This is a test!", -1) // "This is a test!"