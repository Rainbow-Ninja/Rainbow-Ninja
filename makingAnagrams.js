function makeAnagram(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    const aArr = a.split("");
    const bArr = b.split("");
    
    let count=0;
    for(let i = 0; i < aLen; i++){
        for(let j = 0; j < bLen; j++){
            if(aArr[i] === bArr[j]){
                bArr.splice(j, 1);
                count++;
                break;
            }
        }
    }
    return((aLen - count) + (bLen - count));
}