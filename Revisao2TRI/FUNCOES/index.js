//FUNÇÕES:
//DECLARAÇÃO
function dizOla() {
  console.log("olá");
}
function olaPessoa(nome) {
  console.log(`Olá, ${nome}`);
}
const nome = "Ana Julia";
const idade = 17;

function retornaDados() {
  return `Nome: ${nome} - Idade: ${idade}`;
}

//INVOCAÇÃO
//dizOla()
//olaPessoa('ana Bia')

//FUNÇOẼS PERSONALIZADAS VS FUNÇOẼS NATIVAS
let salario = 1000;
setInterval(function () {
  salário = salario + 100;
  console.log("ganhei ${salario}");
}, 200); //TEMPO MS
