function twoStrings(s1, s2) {
    let str1 = new Set(s1.split(""));
    let str2 = new Set(s2.split(""));
    let arr1 = [...str1];
    let arr2 = [...str2];
    for(const letter of arr1){
        for(const char of arr2){
            if(letter === char){
                return "YES";
            }
        }
    }
   return "NO";
   }