let n = 5;

for (let i=1; i<=n; i++){
  let bag = "";

  for(let j=1; j<=i; j++){
bag += j
  }

    for(let j=1; j<=n*2-i*2; j++){
bag += "-"
  }

    for(let j=i; j>0; j--){
bag += j
  }

  console.log(bag)
}