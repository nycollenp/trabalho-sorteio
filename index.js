
var resultados = 0;
var tentativas = 0;

function refresh() {
    //gera um numero aleatorio
    tentativas = 0;
    resultados = parseInt(Math.random() *100);

    console.log(resultados)
}
refresh();


document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('send');
    const inputField = document.getElementById('game');


    function handleSubmit() {
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
    
    button.addEventListener('click', handleSubmit);

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    });
});

