<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic-Tac-Toe</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
      margin: 0;
    }

    h1 {
      color: #ffffff;
      margin-bottom: 20px;
    }

    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 5px;
    }

    .cell {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
      font-weight: bold;
      color: #333;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .cell:hover {
      background-color: #f0f0f0;
    }

    .status {
      margin-top: 20px;
      color: #ffffff;
      font-size: 1.2em;
    }

    .reset-btn {
      margin-top: 15px;
      padding: 10px 20px;
      background-color: #ffffff;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      color: #333;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .reset-btn:hover {
      background-color: #e0e0e0;
    }
  </style>
</head>
<body>
  <h1>Tic-Tac-Toe</h1>
  <div class="board" id="board">
    <div class="cell" data-index="0"></div>
    <div class="cell" data-index="1"></div>
    <div class="cell" data-index="2"></div>
    <div class="cell" data-index="3"></div>
    <div class="cell" data-index="4"></div>
    <div class="cell" data-index="5"></div>
    <div class="cell" data-index="6"></div>
    <div class="cell" data-index="7"></div>
    <div class="cell" data-index="8"></div>
  </div>
  <div class="status" id="status"></div>
  <button class="reset-btn" onclick="resetGame()">Reset Game</button>

  <script>
    const cells = document.querySelectorAll('.cell');
    const statusText = document.getElementById('status');
    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ["", "", "", "", "", "", "", "", ""];

    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    function handleCellClick(e) {
      const cell = e.target;
      const index = cell.getAttribute('data-index');

      if (gameState[index] !== "" || !gameActive) return;

      gameState[index] = currentPlayer;
      cell.textContent = currentPlayer;

      checkResult();
    }

    function checkResult() {
      let roundWon = false;

      for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          roundWon = true;
          break;
        }
      }

      if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
      }

      if (!gameState.includes("")) {
        statusText.textContent = "Draw!";
        gameActive = false;
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `Player ${currentPlayer}'s turn`;
    }

    function resetGame() {
      gameState = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = 'X';
      gameActive = true;
      statusText.textContent = "";
      cells.forEach(cell => cell.textContent = "");
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  </script>
</body>
</html>
