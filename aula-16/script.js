document.writeln("Olá, mundo!");
document.writeln("<h2>Bem-vindo ao JavaScript</h2>");
window.alert("Esta é uma mensagem de alerta!");
document.getElementById("title").innerHTML = "Aprendendo JavaScript com o melhor professor da UVV!!!";
let nome = prompt("Digite seu nome:");
const novafrase = document.getElementById("novafrase");

novafrase.innerHTML = "Olá, " + nome +"! Seja bem-vindo ao JavaScript!";

novafrase.style.color = "rgb(208, 173, 209)";

novafrase.style.fontSize = "40px";

function exibirMensagem() {
    let nome = document.getElementById("nome").value;
    novafrase.innerHTML = "Olá, " + nome + "! Seja bem-vindo ao JavaScript!";
    novafrase.style.color = "rgb(208, 173, 209)";
    novafrase.style.fontSize  = "50px";
}
