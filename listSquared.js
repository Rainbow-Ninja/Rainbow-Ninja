function listSquared(m, n) {
    list = [];
    while(m < n){
        squFactors = []
        factors = findFactors(m);
        factors.forEach(num => squFactors.push(num**2))
        bigNum = squFactors.reduce((acc, curr) => acc + curr)
        isSqu = isSquare(bigNum);
        if(isSqu){ list.push([m, bigNum]) }
        m++;
    }
    return list;
}

function findFactors(num) {
    factors = []
    for(i = 1; i <= num; i++){
        if(num%i == 0){
            factors.push(i)
        }
    }
    return factors;
}

function isSquare(num){
    for(i = 1; i < num; i++){
        if(i*i == num){
            return true;
        } else if (i*i > num) {
            return false;
        }
    }
    return factors;
}
