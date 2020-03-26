function minimumAbsoluteDifference(arr) {
    const arrLen = arr.length
    let minValue = Infinity;

    arr.sort();

    for(let i = 0; i < arrLen; i++){
        minValue = minValue > Math.abs(arr[i] - arr[i+1]) ? Math.abs(arr[i] - arr[i+1]) : minValue;
        }
    return minValue;
}