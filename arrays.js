var fish = ['dolphin','shark','Flowerhorn','whale',];
//console.log(fish[0]);

for (let index = 0; index < fish.length; index++) {
    const element = fish[index];
    console.log(element);
}
console.log("~~~~~~~~~~")
for (const key in fish) {
    if (fish.hasOwnProperty(key)) {
        const element = fish[key];
        console.log(element)
    }
}
console.log("~~~~~~~~~~")

for (const i of fish) {
    console.log(i)
}