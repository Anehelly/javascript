let num= [8, 1, 7, 9, 5]
num.sort()
/*for(let pos=0; pos<=num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

