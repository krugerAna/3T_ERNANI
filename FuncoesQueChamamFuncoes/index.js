/** CRIE UM ARRAY DE OBJETOS==> PESSOAS
* COM OS SEGINTES ATRIBUTOS: NOME/SOBRENOME
* CRIE UMA FUNÇÃO QUE ITERE SOBRE O ARRAY
* E RETIRE NOMES E SOBRENOMES
* CRIE UMA VARIÁVEL COM O CONTEÚDO:
*       -> const emailBase = "@escola.pr.gov.br"
* A PARTIR DESES DADOS FORME UM @escola COM
* NOME.SOBRE+EMAILBASE
* EXECUTE A FUNÇÃO...
*/
const pessoas = [];
//CRIAR EMAIL BASE
const emailBase = "@escola.pr.gov.br"

//FUNÇÃO DE CONTRUÇÃO E IMPRESSÃO
function gerarEmail() {
  if (pessoas.length == 0) {
    console.log("Nenhum aluno cadastrado");
  }else {
    for (pessoa of pessoas) {
  const nome = pessoa.nome
  const sobrenome = pessoa.sobrenome
  const email = `${nome}.${sobrenome}.${emailBase}`
  console.log(email)
    }
  }
}
//FUNÇÃO DE CADASTRO
function cadastrarAluno(nome, sobrenome){
  pessoas.push({ nome:nome, sobrenome:sobrenome});
}
//CADASTRE 5 ALUNOS

cadastrarAluno("Duda", "Altheia");
cadastrarAluno("Gustavo","Rodrigues");
cadastrarAluno("Ana","Cruz");
cadastrarAluno("Ana","Kruger");
cadastrarAluno("Ana","Correa");

gerarEmail(); //INVOCANDO A FUNÇÃO
// CONVERTAM O CÓDIGO ACIMA PARA UMA FUÇÃO INVOCÁVEL
// E EXECUTÁVEL