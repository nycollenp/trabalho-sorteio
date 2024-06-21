var resultados = 0;
var tentativas = 0;

function refresh() {
    //gera um numero aleatorio
    tentativas = 0;
    resultados = parseInt(Math.random() *100);

    console.log(resultados)
}

function verifyNumber() {

    var game = document.getElementById('game').value;
    if(game > 100 || game < 1)
        {
            alert('Aposta inválida');
            return;
        }

        if (game > resultados)
            {
                tentativas++;
                alert('O número sorteado é menor');
            }

        else if (game < resultados)
            {
                tentativas++;
                alert('O número sorteado é maior');
            }

            else 
            {
                alert('Parabéns você acertou!! Com ' +tentativas+ ' erros');
                refresh();
            }
}

refresh();
