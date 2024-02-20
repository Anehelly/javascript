function tabuada(){
    var n = window.document.getElementById('num')
    var n1 = Number(n.value)
    var res = window.document.getElementById('res')

    if(n.value === ''){
        alert('Informe o número para iniciar a tabuada!')
        return
    }

    res.innerHTML = 'Iniciando a tabuada...';

    for(var c=1; c<=10; c++){
        var conta = n1*c
        res.innerHTML += '<br>' + n1 + 'x' + c + '=' + conta + '<br>'
        
        
    }
}