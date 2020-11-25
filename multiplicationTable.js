multiplicationTable = function(size) {
    const table = [];
    let arr = []
    for(i = 1; i <= size; i++){
        for(j = 1; j <= size; j++){
            arr.push(j*i);
        }
    table.push(arr);
    arr = []
    }
    return table;
}

multiplicationTable(3);