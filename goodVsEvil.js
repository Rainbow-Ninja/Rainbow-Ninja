function goodVsEvil(good, evil){
    const goodValues = [1, 2, 3, 4, 4, 10]
    const evilValues = [1, 2, 2, 2, 3, 5, 10]
    goodSide = good.split(" ")
    evilSide = evil.split(" ")
    gdlen = goodSide.length
    evlen = evilSide.length 
    goodTotal = evilTotal = 0;
    for(i = 0; i < gdlen; i++){
        goodTotal += goodSide[i] * goodValues[i];
    }
    for(i = 0; i < evlen; i++){
        evilTotal += evilSide[i] * evilValues[i];
    }
    if(goodTotal > evilTotal){
        return "Battle Result: Good triumphs over Evil";
    } else if(goodTotal < evilTotal) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
}

console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))