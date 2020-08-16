function sumIntervals(intervals){
    sorted = intervals.sort()
    total = 0;
    for( i = 0; i < intervals.length; i++){
        nowStart = intervals[i][0];
        nowEnd = intervals[i][1];
        if( i > 0 ){
            prevStart = intervals[i-1][0];
            prevEnd = intervals[i-1][1];
            if(nowStart < prevEnd & nowEnd > prevEnd){
                nowStart = prevEnd;
            } else if (nowStart < prevEnd & nowEnd <= prevEnd) {
                nowEnd = nowStart = 0;
            }
        }
        total += nowEnd - nowStart;
    }  
    return total; 
}

console.log(sumIntervals([[1,5],[1,5]]));
console.log(sumIntervals([[1,4],[7, 10],[3, 5]]));