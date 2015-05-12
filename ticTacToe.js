(function(){
//
//
//          1 |  2  |  3  
//       -----+-----+-----
//          4 |  5  |  6  
//       -----+-----+-----
//          7 |  8  |  9  
//
//
	Player = function(name, marker){
		this.playerName = name;
		this.marker = marker;
		this.spaces = [];
	}

	var winCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
			players = [playerO = new Player("Ali", "O"), playerX = new Player("Mike", "X")],
			turnCount = 0;

	turnIncrement = function(){
		if (turnCount == 8){
			alert("Game ends in a Tie!");
		} else if (turnCount % 2 == 0 && turnCount != 8) {
			players[0].turn = true;
			players[1].turn = false;
		} else {
			players[1].turn = true;
			players[0].turn = false;
		}
		// if (turnCount % 2 == 0){
		// } else if (turnCount % 2 == 1) {
		// }
		turnCount++
		// console.log(turnCount);
	}

// writes the board to the dom
	createBoard = function(){
		// creates board with an outline border
		var table = document.createElement('table'),
				dataId = 0,
				row, cell;

		table.border = 1;
		// creates three rows
		for (var r = 0; r < 3; r++) {
	    row = document.createElement("tr");
	    table.appendChild(row);
	    // creates three cells per row
	    for (var c = 0; c < 3; c++) {
	    	cell = document.createElement("td");
	    	cell.width = cell.height = 50;
        cell.align = 'center';
        // assign data-id attr to each cell so we can determine win state later
        cell.setAttribute('data-id', dataId + 1);
        dataId++;
	    	row.appendChild(cell);
	    }
	  }
		document.body.appendChild(table);
	}

	// marks the clicked cell with appropriate marker and increments turnCount variable
	markCell = function(el){
		if (players[0].turn == true && el.innerHTML == ""){
			el.innerHTML = players[0].marker;
			players[0].spaces.push(el.getAttribute("data-id"));
			// winConditions(players[0]);
		} else if (players[1].turn == true && el.innerHTML == "") { 
			el.innerHTML = players[1].marker;
			players[1].spaces.push(el.getAttribute("data-id"));
			// winConditions(players[1])
		}
	}
	// assigns event listeners to all cells
	eventDelegation = function(){
	var cells = document.querySelectorAll('td');

		for (var i = 0; i < cells.length; i++){
			cells[i].addEventListener('click', function(event){
				turnIncrement();
				markCell(event.target);
			})
		}
	}

	winConditions = function(player){
		for (var i = 0; i < winCondition.length; i++){
			// compares player marked spaces with each win condition

			// console.log("winCondition", winCondition[i]);
			// alert("Player " + player.marker + " won!");
		}
	}

createBoard();
eventDelegation();

}());