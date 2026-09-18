let n = 5;

for (let i=1; i<=n; i++){
  let bag = "";

  for(let j=i; j<=n-1; j++){
bag += " "
  }
  for(let j=1; j<=i*2-1; j++){
bag += "*"
  }
  for(let j=i; j<=n-1; j++){
bag += " "
  }
  console.log(bag)
}