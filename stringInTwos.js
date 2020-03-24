function solution(str){
    const myTwosArr = [];
   
    for(let i = 0; i < str.length; i++){
        if(i%2==1) { continue };
        if(i == str.length-1 && !str[str.length]){
            myTwosArr.push(`${str[str.length-1]}_`);
            return myTwosArr;
        }
        myTwosArr.push(str.slice(i, i+2));
    }
    return myTwosArr;
}

console.log(solution("abcde"));
console.log(solution("abcd"));