let num = Number(prompt("Digite um numero para saber sua tabuada"))
for(let cont = 0 ; cont <= 10 ; cont++){
    let tabuada = num * cont
    console.log(`${num} X ${cont} = ${tabuada}`)
}