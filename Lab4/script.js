var board = ['', '', '', '', '', '', '', '', ''];

var wincombo = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]]


cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].addEventListener('click', clicked, false);
	}
}


function clicked(source) {
	makeTurn(source.target.id, 'X');
	if (isEnd())
		return null;

	moveAi();

	isEnd();
}

function makeTurn(id, player) {
	if (board[id] == '') {
		board[id] = player;
		document.getElementById(id).innerText = player;
	}
}

function checkWin() {
	for (pos of wincombo)
		if (board[pos[0]] === board[pos[1]] && board[pos[0]] == board[pos[2]])
			if (board[pos[0]] !== '')
				return board[pos[0]];

	return false;
}

function isEnd() {
	var res = checkWin();

	console.log(res);
	if (res === false) 
		return false;

	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', clicked, false);
	}

	text = document.getElementById("endGameText");
	if (res == "X")
		text.innerText = "You win!";
		text.style.display = "block";

	if (res == "O")
		text.innerText = "You lose!";
		text.style.display = "block";

	return true;
}

function moveAi() {
	randomPos = Math.floor(Math.random() * Math.floor(9));

	while (board[randomPos] != '')
		randomPos = Math.floor(Math.random() * Math.floor(9));

	makeTurn(randomPos, 'O');
}