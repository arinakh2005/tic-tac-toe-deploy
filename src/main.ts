'use strict'

import { Game } from "./classes/Game";

let game: Game;

export function createNewGame() {
    let haveUnfinishedGame = JSON.parse(window.localStorage.getItem('haveUnfinishedGame'));
    game = new Game();
    game.startNewGame(haveUnfinishedGame);
}

export function doStep(id: string) {
    game.doStep(id);
}

export function restartGame() {
    if (game) {
        game.clearGame();
    }
    createNewGame();
}


document.getElementById("btn-start").addEventListener("click", createNewGame);
document.getElementById("btn-clear").addEventListener("click", restartGame);
document.getElementById("game-area").addEventListener("change", restartGame);

document.getElementById("number-of-cells-for-win").addEventListener("change", restartGame);
document.getElementById("game-mode").addEventListener("change", restartGame);

