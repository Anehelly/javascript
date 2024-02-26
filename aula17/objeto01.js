let amigo = {nome : 'José', sexo: 'M', peso: 80,
 engordar(p=0){//p começa valendo 0
    console.log('Engordou')
    this.peso += p//soma o peso com p
 }}
 amigo.engordar(2)//passando o parâmentro 2 ele soma o peso original com dois
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)
