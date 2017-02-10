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
