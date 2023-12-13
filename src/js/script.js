const btnVerificar = window.document.getElementById("btn-verificar")

btnVerificar.addEventListener("click", function() {
    let data = new Date()
    let ano = data.getFullYear()
    let anoDeNascimento = window.document.getElementById("txtano")
    let result = window.document.querySelector("section#result")

    if(anoDeNascimento.value.length === 0 || anoDeNascimento.value > ano) {
        alert(`[Erro] Verifique os dados e tende novamente`)
    } else {
        alert('Tudo Certo')
    }
});