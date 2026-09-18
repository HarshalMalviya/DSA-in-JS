let n = 5;

for (let i=n; i>0; i--){
  let bag = "";

  for(let j=i; j<=n; j++){
bag += String.fromCharCode(64+j)

  }
  console.log(bag)
}