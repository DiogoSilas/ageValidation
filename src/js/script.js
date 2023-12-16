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
        img.setAttribute('class', 'foto')
        let genero = ''
        if(formSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 2) {
                img.setAttribute('src', '../src/images/foto-bebe.jpg')
            } else if(idade >= 3 && idade <= 4) {
                img.setAttribute('src', '../src/images/foto-bebe-homem.jpg')
            } else if(idade >= 5 && idade <= 8) {
                img.setAttribute('src', '../src/images/foto-subcrianca-homem.jpg')
            } else if(idade >= 9 && idade <= 12) {
                img.setAttribute('src', '../src/images/foto-crianca-homem.jpg')
            } else if(idade >= 13 && idade <= 17) {
                img.setAttribute('src','../src/images/foto-adolecente-homem.jpg' )
            } else if(idade >= 18 && idade <= 24) {
                img.setAttribute('src', '../src/images/foto-jovem-homem.jpg')
            } else if(idade >= 25 && idade <= 62) {
                img.setAttribute('src', '../src/images/foto-adulto-homem.jpg')
            } else if(idade >= 63 && idade <= 140) {
                img.setAttribute('src', '../src/images/foto-idoso-homem.jpg')
            } else if(idade > 141) {
                img.setAttribute('class', '')
            }

        } else if(formSex[1]) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 2) {
                img.setAttribute('src', '../src/images/foto-bebe.jpg')
            } else if(idade >= 3 && idade <= 4) {
                img.setAttribute('src', '../src/images/foto-bebe-mulher.jpg')
            } else if(idade >= 5 && idade <= 8) {
                img.setAttribute('src', '../src/images/foto-subcrianca-mulher.jpg')
            } else if(idade >= 9 && idade <= 12) {
                img.setAttribute('src', '../src/images/foto-crianca-mulher.jpg')
            } else if(idade >= 13 && idade <= 17) {
                img.setAttribute('src','../src/images/foto-adolecente-mulher.jpg' )
            } else if(idade >= 18 && idade <= 24) {
                img.setAttribute('src', '../src/images/foto-jovem-mulher.jpg')
            } else if(idade >= 25 && idade <= 62) {
                img.setAttribute('src', '../src/images/foto-adulto-mulher.jpg')
            } else if(idade >= 63 && idade <= 140) {
                img.setAttribute('src', '../src/images/foto-idosa-mulher.jpg')
            } else if(idade >= 141) {
                img.setAttribute('class', '')
            }
        }

        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong>.`
        result.appendChild(img)
    }
});