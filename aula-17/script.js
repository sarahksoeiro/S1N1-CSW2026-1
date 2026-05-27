
function calcularIdade() {
    let anoNascimento = document.getElementById("anoNascimento").value;
    let idade = 0;
    let anoAtual = new Date().getFullYear();
    alert(anoAtual)
    alert(anoNascimento)

    idade = anoAtual - anoNascimento;

    if(anoNascimento == 0) {
        alert("Digite um ano válido")
        return
    }

    document.getElementById("resposta").innerHTML = "Sua idade é " + idade 
}