// Greed is Good - passed in 5 dice

function score( dice ) {
    total = 0;
    count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    values = {1: 1000, 6: 600, 5: 500, 4: 400, 3: 300, 2: 200, 10: 100, 50: 50}
    dice.forEach(function(item) {
        count[item]++;
    })
    console.log(count)
    for(num in count) {
        if(count[num] >= 3){
            total += values[num]
            count[num] -= 3;
        }
    }
    while(count[1] > 0){
        total += values[10];
        count[1] --;
    }
    while(count[5] > 0){
        total += values[50];
        count[5] --;
    }
    return(total);
}