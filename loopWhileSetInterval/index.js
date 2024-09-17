// LOOP WHILE É UM CICLO DE REPETIÇÃO QUE PODE SER PARADO ATRAVÉS DE UMA CONDIÇÃO.
// O SETINTERVAL É UM CICLO DE REPETIÇÃO QUE EXECUTA UM CODIGA TEMPOS EM TEMPOS(INTERVALO EM MILISEGUNDOS)

//while (true) {
//console.log('oi!!!')
//}

const intervalo = setInterval(function () {
  //DEFINO FUNÇÃO INTERVALO
  let n = math.round(Math.random() * 60); //UM N° ALEATÓRIO ATÉ 60
  console.clear(); //LIMPO A TELA
  console.log(`FPS: ${n}`); //IMPRIM O RESULTADO
}, 1000); // 1 segundo em milisegundos

//clearInterval(intervalo) CONSIGO PARAR
