function contar(){
    var n1 = window.document.getElementById('inicio')
    var n2 = window.document.getElementById('fim')
    var p = window.document.getElementById('passo')
    var res = window.document.getElementById('resp')

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var cont = Number(p.value)

    if (n1.value === "") {
        alert("Por favor, insira um valor inicial.");
        return; // Retorna para evitar que a contagem seja iniciada
    }

    if(p.value === "0"){
        alert("O incremento não pode ser zero")
        return;
    }

    res.innerHTML = 'Iniciando a contagem...';
    setTimeout(function() {
        res.innerHTML = 'Contando... '; // Limpa o conteúdo anterior

        // Verifica se a contagem é progressiva ou regressiva
        if (num1 < num2) {
            for (var c = num1; c <= num2; c += cont) {
                res.innerHTML += c + '👉'; // Adiciona cada número ao conteúdo do elemento res
            }
            res.innerHTML += ' fim 🚩';
        } else {
            for (var c = num1; c >= num2; c -= cont) {
                res.innerHTML += c + '👉'; // Adiciona cada número ao conteúdo do elemento res
            }
            res.innerHTML += ' fim 🚩';
        }
    }, 2000); // Atraso de 2 segundos (2000 milissegundos)
}