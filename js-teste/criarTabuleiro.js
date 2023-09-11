criarTabuleiro()

function criarTabuleiro(){
    const chessboard = document.getElementById('chessboard');
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const cell = document.createElement('div');
                const letter = letters[col];
                const number = 8 - row;
                const id = letter + number;
                // cell.textContent = id;
                cell.id = id;
                cell.className = (row + col) % 2 === 0 ? 'casa white' : 'casa black';
                chessboard.appendChild(cell);
            }
        }
}

