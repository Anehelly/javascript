function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){//Validação do campo ano de nascimento
        window.alert('[ERRO] Verifique a data e tente novamente')
    }else{//verificando a idade
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)  
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){// Se o que foi marcado foi a primeira opção
            genero = 'homem'
            document.body.style.background = '#'
            if (idade >=0 && idade <15){
                //criança
               img.setAttribute('src', 'menino.png')
            }else if(idade <29){
                //jovem 
                img.setAttribute('src', 'hjovem.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade<15){
                //criancça
                img.setAttribute('src', 'menina.png')
            }else if(idade <29){
                //jovem
                img.setAttribute('src', 'mjovem.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    }