/*let num = [5, 8, 2, 9, 3]
num.sort()
console.log(num)
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos= num.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`)
*/

let num = [4, 8, 7, 5, 3]
num.sort()
console.log(num)
let pos = num.indexOf(3)
if(pos!== -1){
    console.log(`O número 3 foi encontrado na posição ${pos}`)
}else{
    console.log(`O número 3 não foi encontrado`)
}