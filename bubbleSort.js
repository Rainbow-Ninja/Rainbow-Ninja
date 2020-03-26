function countSwaps(a) {
    let temp = null;
    let count = 0;
    let n = a.length;
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if(a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                count++;
            }
        }
    }
    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);
}