let randomNumber;
let gameStarted = false;

document.getElementById('startButton').addEventListener('click', startGame);

document.getElementById('guessButton').addEventListener('click', makeGuess);

document.getElementById('guessInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        makeGuess();
    }
});

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log("Número sorteado:", randomNumber);
    
    gameStarted = true;

    document.getElementById('gameArea').style.display = 'block';

    document.getElementById('log').innerHTML = '';

    document.getElementById('message').innerHTML = '';

    document.getElementById('guessInput').value = '';

    document.getElementById('guessInput').focus();

    document.getElementById('startButton').classList.add('hidden');
}

function makeGuess() {
    if (!gameStarted) {
        document.getElementById('message').innerText = 'O jogo ainda não foi iniciado!';
        return;
    }

    const guess = parseInt(document.getElementById('guessInput').value);
    if (isNaN(guess)) {
        document.getElementById('message').innerText = 'Por favor, insira um número válido.';
        return;
    }

    if (guess < 1 || guess > 100) {
        document.getElementById('message').innerText = 'Por favor, insira um número entre 1 e 100.';
        return;
    }

    document.getElementById('message').innerText = ''; // Limpa a mensagem de erro anterior

    let log = document.getElementById('log');
    if (guess < randomNumber) {
        log.innerHTML += `<p>${guess} é menor que o número sorteado.</p>`;
    } 
    
    else if (guess > randomNumber) {
        log.innerHTML += `<p>${guess} é maior que o número sorteado.</p>`;
    } 
    
    else {
        log.innerHTML += `<p>Parabéns! Você acertou! O número era ${randomNumber}.</p>`;
        gameStarted = false;
    }

    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}