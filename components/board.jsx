import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Tile from './tile.jsx';
import Game from './game.jsx';


class Board extends React.Component {
    constructor(props){
        super(props);
        // const bboard = this.props.board;
        // this.makeBoard = this.makeBoard.bind(this);
        this.props.updateGame();
    }

    // makeBoard(){

    //     const _bconstoard = this.props.board
    //         _board.map((row, idx) => {
    //        <div>{row}</div> })
    //     return _board
    // }
    //console.log often if not sure what props are
    render(){
        
        return (
            <div> 
                <section>{this.props.board.grid.map((row,idx) =>{
                    return <li key={idx}>{(row.map((tile, idx2) => {
                        return ( 
                            <Tile key={[idx, idx2]} tile={tile} updateGame={this.props.updateGame}/>
                        )})
                    )}</li>
                })}</section>
            </div>
        )
    }
}

export default Board;

// (<div>
//     <div>{this.props.board.grid.map((row, idx) => {
//         { console.log(row) }
//         <div key={idx} > {row.forEach(tile => {
//             tile =
//                 <li><Tile /></li>
//             { console.log(tile) }

//         })}</div>

//     })}</div>
// </div>)