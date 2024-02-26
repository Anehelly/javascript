let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//Função para verificar se é um número
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
} 
//Função para verificar se o nº já esta na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
//Função para adicionar um nº na lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){ //Exclamação significa não em JS
       valores.push(Number(num.value)) //adiciona o nº na lista
       //Para mostrar o nº dentro do select ->
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = '' //Coloquei os valores, cliquei em finalizar, e quando eu adicionar mais um número ele vai limpar os resultados pra que eu possa clicar em finalizar novamente
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //vai limpar o campo adicionar
    num.focus()// o cursor vai ficar no campo adicionar aguardando o próximo elemento
}

function finalizar(){
    if (valores.length == 0){//Se não foi adicionado nenhum valore
        alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length//Total de números cadastrados
        // Analisar maior e menor valor
        //Na primeira validação, tanto o maior quanto o menor vai ser o primeiro número informado
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''//limpar a variável res
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}