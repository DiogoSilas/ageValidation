const btnVerificar = document.getElementById("btn-verificar");
const anoDeNascimento = document.getElementById("txtano");
const result = document.querySelector("section#result");

btnVerificar.addEventListener("click", () => {
    const anoAtual = new Date().getFullYear();

    if (anoDeNascimento.value.length === 0 || Number(anoDeNascimento.value) > anoAtual) {
        result.innerHTML = `[Erro] Verifique os dados e tente novamente`;
    } else {
        const formSex = document.getElementsByName("radsex");
        const idade = anoAtual - Number(anoDeNascimento.value);
        const img = document.createElement('img');
        img.setAttribute('class', 'foto');
        let genero = '';
        const baseImagePath = './src/images/foto-';

        if (formSex[0].checked) {
            genero = 'Homem';
        } else if (formSex[1].checked) {
            genero = 'Mulher';
        }

        if (idade >= 0 && idade <= 2) {
            img.setAttribute('src', `${baseImagePath}bebe-${genero.toLowerCase()}.jpg`);
        } else if (idade >= 3 && idade <= 4) {
            img.setAttribute('src', `${baseImagePath}bebe-${genero.toLowerCase()}.jpg`);
        } else if (idade >= 5 && idade <= 8) {
            img.setAttribute('src', `${baseImagePath}subcrianca-${genero.toLowerCase()}.jpg`);
        } else if (idade >= 9 && idade <= 12) {
            img.setAttribute('src', `${baseImagePath}crianca-${genero.toLowerCase()}.jpg`);
        } else if (idade >= 13 && idade <= 17) {
            img.setAttribute('src', `${baseImagePath}adolecente-${genero.toLowerCase()}.jpg`);
        } else if (idade >= 18 && idade <= 24) {
            img.setAttribute('src', `${baseImagePath}jovem-${genero.toLowerCase()}.jpg`);
        } else if (idade >= 25 && idade <= 62) {
            img.setAttribute('src', `${baseImagePath}adulto-${genero.toLowerCase()}.jpg`);
        } else if (idade >= 63 && idade <= 140) {
            img.setAttribute('src', `${baseImagePath}idoso-${genero.toLowerCase()}.jpg`);
        } else if (idade > 141) {
            img.setAttribute('class', '');
        }

        result.style.textAlign = 'center';
        result.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong>.`;
        result.appendChild(img);
    }
});