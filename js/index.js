document.getElementById ("start-button").addEventListener("click", startGame);
    const gameIntroElement = document.querySelector("game-intro");
    const gameOverElement = document.querySelector("reStart");
    const restartButton = gameOverElement
        .querySelector("button")
	    .addEventListener("click", startGame);
    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let background,
	player,
	defenders = [],
	frameCounter = 0,
	moveSpeed = 5,
	intervalId,
	score = 0;