let map = new Map()

map.set("Harshal", 20);
map.set("aashish", 18);

for (let [key , value] of map){
console.log(key + "->" + value);
}

for (let key of map.keys()){
console.log(key);
}

for (let value of map.values()){
console.log(value);
}