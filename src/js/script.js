const btnVerificar = window.document.getElementById("btn-verificar")

btnVerificar.addEventListener("click", function() {
    let data = new Date()
    let ano = data.getFullYear()
    let anoDeNascimento = window.document.getElementById("txtano")
    let result = window.document.querySelector("section#result")

    if(anoDeNascimento.value.length === 0 || Number(anoDeNascimento.value) > ano) {
        result.innerHTML = `[Erro] Verifique os dados e tende novamente`
    } else {
        let formSex = document.getElementsByName("radsex")
        let idade = ano - Number(anoDeNascimento.value)
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let genero = ''
        if(formSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 3) {
                //bebe
                img.setAttribute('src', '../src/images/foto-bebe-homem.jpg')
            } else if(idade <= 13) {
                //criança
                img.setAttribute('src', '../src/images/foto-crianca-homem.jpg')
            } else if(idade <= 21) {
                //jovem
                img.setAttribute('src', '../src/images/foto-jovem-homem.jpg')
            } else if(idade <= 50) {
                //adulto
                img.setAttribute('src', '../src/images/foto-adulto-homem.jpg')
            } else if(idade <= 120) {
                //idoso
                img.setAttribute('src', '../src/images/foto-idoso-homem.jpg')
            }

        } else if(formSex[1]) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 3) {
                //bebe
                img.setAttribute('src', '../src/images/foto-bebe-mulher.jpg')
            } else if(idade >= 4 && idade <= 13) {
                //criança
                img.setAttribute('src', '../src/images/foto-crianca-mulher.jpg')
            } else if(idade >= 14 && idade <= 21) {
                //jovem
                img.setAttribute('src', '../src/images/foto-jovem-mulher.jpg')
            } else if(idade >= 22 && idade <= 50) {
                //adulto
                img.setAttribute('src', '../src/images/foto-adulto-mulher.jpg')
            } else if(idade >= 51 && idade <= 120) {
                //idoso
                img.setAttribute('src', '../src/images/foto-idosa-mulher.jpg')
            }
        }

        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong>.`
        result.appendChild(img)
    }
});