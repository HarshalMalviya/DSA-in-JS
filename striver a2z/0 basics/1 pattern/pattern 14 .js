let n = 5;

for (let i=1; i<=n; i++){
  let bag = "";

  for(let j=1; j<=i; j++){
bag += String.fromCharCode(64+j)

  }
  console.log(bag)
}