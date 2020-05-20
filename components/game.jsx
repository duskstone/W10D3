import React from 'react';
// import Board from './board.jsx'
// import Minesweeper from '../minesweeper.js'
// import * as Minesweeper from '../minesweeper.js'
// import Board from "../minesweeper.js"
import * as Minesweeper from "../minesweeper";
import Board from './board.jsx'

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 20);
        this.state = {
            board: board
        }
        // const board = 
       this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){

    }
    // ghost tabs?
    render() {
        return <Board board={this.state.board} updateGame={this.updateGame} />;
        // return <div>"This is game :3"</div>
    }
};

export default Game;