// CRIE UM ALGORITMO QUE ORGANIZE UMA LISTA
  // NOME (MINIMO 5) EM ORDEM ALFABETICA E PRIMEIRA LETRA MAIUSCULA

  // A FUNÇÃO FINAL DEVERÁ RECEBER UM ARRAY COMO PARAMETRO E RETORNAR UM NOVO ARRAY ORGANIZADO

  // ANTE DE RETORNAR, VERIFIQUE E O VALOR RECEBIDO É UM ARRAY VÁLIDO E RETORNE UMA MENSAGEM DE ERRO CASO SEJA INVÁLIDO

  // EXEMPLO:
  // NÃO SE ESQUEÇA DE INVOCAR A FUNÇÃO

  function organize(array) {
    if (typeof array === "object") {
      return array
        .map((nomes) => {
          return nomes.charAt(0).toUpperCase() + nomes.slice(1).toLowerCase();
        })
        .sort();
    } else {
      return "Não é um array";
    }
  }

  const nomes = ["athena", "lucas", "felipe", "ana", "beatriz"];

  console.log(organize(nomes));
