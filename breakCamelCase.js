// complete the function
function solution(string) {
    word = string.split("").map((c) => {
        if(c == c.toUpperCase()){
            c = " " + c;
        }    
        return c
    });
    return word.join("")
}

console.log(solution('camelCasingTest'))