function toCamelCase(str){
    phrase = str.split(/[-_]/)
    len = phrase.length
    newPhrase = [phrase[0]]
    for(i = 1; i < len; i ++){
        char = phrase[i].slice(0, 1).toUpperCase()
        newPhrase.push(char + phrase[i].slice(1, phrase[i].length))
    }
    return newPhrase.join("")
}

toCamelCase("the_stealth_warrior")
toCamelCase("The-Stealth-Warrior")