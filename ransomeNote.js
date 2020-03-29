function checkMagazine(magazine, note) {
    let myWords = [];
    const noteLen = note.length;
    const sortedNote = note.sort();
    const sortedMag = magazine.sort();
    for(let i = 0; i < noteLen; i++){
        for(let j = 0; j < magazine.length; j = 0){
            if(sortedNote[i]==sortedMag[j]){
                myWords.push(sortedMag.splice(j, 1));
                break;
            }
               sortedMag.shift();
        }
    }

    let flatWords = myWords.reduce(function(prev, curr) {
        return prev.concat(curr);
    });

    console.log(JSON.stringify(sortedNote) == JSON.stringify(flatWords) ? "Yes" : "No");
}
