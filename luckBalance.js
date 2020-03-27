function luckBalance(k, contests) {
    let luckCount = 0;
    contests.sort()
    contests.sort(function(a, b){
        if(a[1] === 1 && b[1] ===1){
            return b[0]-a[0];
        }
    })
    console.log("contests", contests)

    let zeroArr = contests.filter(function(current, i, arr){
        if(current[1]===0) return true;
    })
    console.log("zeroarr ", zeroArr)
    let onesArr = contests.filter(function(current, i, arr){
        if(current[1]===1) return true;
    })
    console.log("onesArr ", onesArr)
    for(let i = 0; i < onesArr.length; i++){
        if(i<k){
            luckCount += onesArr[i][0];
        } else {
            luckCount -= onesArr[i][0];
        }
    }

    for( let j = 0; j < zeroArr.length; j++){
        luckCount += zeroArr[j][0];
    }
    return luckCount;

}