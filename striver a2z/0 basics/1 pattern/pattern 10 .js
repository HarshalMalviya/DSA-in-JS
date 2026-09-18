let n = 5;

for (let i=1; i<=n; i++){
  let bag = "";

  for(let j=1; j<=i; j++){
bag += "*"

  }
  console.log(bag)
}


for (let i=1; i<=n-1; i++){
  let bag = "";

  for(let j=i; j<=n-1; j++){
bag += "*"

  }
  console.log(bag)
}