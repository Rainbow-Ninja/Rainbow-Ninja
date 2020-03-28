function alternatingCharacters(s) {
    const myArr = s.split("");

    let count = 0;
    myArr.reduce(function(total, current, i, arr){
        if(current === arr[i-1]){
            count++;
            return;
        }
    })
    return count;
}