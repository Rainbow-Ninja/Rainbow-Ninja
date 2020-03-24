function towerBuilder(nFloors) {
    const buildFloors = [];
    const floorWidth = nFloors*2 - 1;
    let spaces;

    for(let i = 0; i < nFloors; i++){
        spaces = (floorWidth - (i * 2 + 1)) / 2;
        buildFloors.push(" ".repeat(spaces) + "*".repeat(i*2+1) + " ".repeat(spaces));
    }
    return buildFloors;
}

console.log(towerBuilder(5));
console.log(towerBuilder(1));