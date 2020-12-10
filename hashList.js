function list(names){
    const leng = names.length;
    if(leng == 0) { return ''};

    const nameArr = []
    for(i = 0; i < leng; i++){
        nameArr.push(names[i].name);
    }
    nameArr.splice(-2, 2, nameArr.slice(-2).join(' & '));
    return nameArr.join(', ');
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]))
// returns 'Bart'

console.log(list([]))
// returns ''