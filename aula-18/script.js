
const diaHoje = new Date().getDate();
const mesAtual = new Date().getMonth() + 1;
const anoAtual = new Date().getFullYear();


function calculadoraIdade() {

    let diaNascimento = Number(document.getElementById("diaNascimento").value);
    let mesNascimento = Number(document.getElementById("mesNascimento").value);
    let anoNascimento = Number(document.getElementById("anoNascimento").value);

    if (diaNascimento == 0 || mesNascimento == 0 || anoNascimento == 0) {
        
        alert("Preencha todos os campos")
        return;
    }

    if (diaNascimento <= 0 || mesNascimento <= 0 || anoNascimento <= 0) {
        
        alert("Insira uma data válida")
        return;
    }

       if ( anoNascimento <= 1900 || anoNascimento <= 2026 ) {
        
        alert("Insira um ano válido")
        return;
    }


    let idadeAnos = anoAtual - anoNascimento;
    let idadeMeses = mesAtual - mesNascimento;
    let idadeDias = diaHoje - diaNascimento;

    if (idadeDias < 0) {
        idadeMeses--;
        idadeDias += 30;
    }

    if (idadeMeses < 0) {
        idadeAnos--;
        idadeMeses += 12;
    }


    document.getElementById("resposta").innerHTML = `Você tem ${idadeAnos} anos, ${idadeMeses} meses e ${idadeDias} dias de vida.`;
}