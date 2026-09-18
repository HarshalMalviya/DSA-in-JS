let n = 4;

for (let i=1; i<=n*2-1; i++){
  let bag = "";

  for(let j=1; j<=n; j++){

  if(i == 1 || i == n*2-1 || j==1 || j ==n*2-1){ 
      bag += 4
  }

  else{
    bag += " "
  }
}

    console.log(bag)
}