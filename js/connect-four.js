function ConnectFour (player1Name, player2Name) {
  this.board = [
    // 0     1     2     3     4     5     6
    [ null, null, null, null, null, null, null ], // 0
    [ null, null, null, null, null, null, null ], // 1
    [ null, null, null, null, null, null, null ], // 2
    [ null, null, null, null, null, null, null ], // 3
    [ null, null, null, null, null, null, null ], // 4
    [ null, null, null, null, null, null, null ], // 5
  ];

  this.player1 = player1Name;
  this.player2 = player2Name;
  this.winner = null;

  // 50/50(ish) chance for either player to start
  if (Math.random() < 0.5) {
    this.currentPlayer = this.player1;
  } else {
    this.currentPlayer = this.player2;
  }
}

ConnectFour.prototype.playChecker = function (columnNumber) {
  var playerPositionFound = 'not found';

  for (var i = (this.board.length - 1); i >= 0; i -= 1) {
    if (this.board[i][columnNumber] === null) {
      playerPositionFound = i;
      break;
    }
  }

  // If never found position, column is full.
  // INVALID MOVE
  if (playerPositionFound === 'not found') {
    return false;
  }

  if (this.currentPlayer === this.player1) {
    this.board[playerPositionFound][columnNumber] = 1;
    this.currentPlayer = this.player2;
  } else {
    this.board[playerPositionFound][columnNumber] = 2;
    this.currentPlayer = this.player1;
  }

  return true;
};

ConnectFour.prototype.dropChecker = ConnectFour.prototype.playChecker;
