console.log('app.js');

var myGlobalConnectGame;

$(document).ready(function () {
  var player1 = prompt('Enter name for Player #1');
  var player2 = prompt('Enter name for Player #2');
  myGlobalConnectGame = new ConnectFour(player1, player2);

  renderBoard();
  updateCurrentPlayer();
});


function updateCurrentPlayer () {
  if (myGlobalConnectGame.currentPlayer === myGlobalConnectGame.player1) {
    $('#current-player').html(myGlobalConnectGame.player1 + "'s Turn");
    $('#current-player').addClass('player-1');
    $('#current-player').removeClass('player-2');

    $('#drop-buttons').addClass('turn-player-1');
    $('#drop-buttons').removeClass('turn-player-2');
  } else {
    $('#current-player').html(myGlobalConnectGame.player2 + "'s Turn");
    $('#current-player').addClass('player-2');
    $('#current-player').removeClass('player-1');

    $('#drop-buttons').addClass('turn-player-2');
    $('#drop-buttons').removeClass('turn-player-1');
  }

  $('#current-player').css('visibility', 'visible');
  $('#drop-buttons').css('visibility', 'visible');
}


function renderBoard () {
  $('#board').empty();

  myGlobalConnectGame.board.forEach(function (row) {
    row.forEach(function (slot) {
      var checkerClass;

      if (slot === 1) {
        // player 1 checker
        checkerClass = 'checker-player-1';
      } else if (slot === 2) {
        // player 2 checker
        checkerClass = 'checker-player-2';
      } else {
        // empty slot
        checkerClass = '';
      }

      var slotHtml = '<div class="square"><div class="slot ' + checkerClass + '"></div></div>';
      $('#board').append(slotHtml);
    });
  });
}
