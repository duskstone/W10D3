import React from 'react';
import * as Minesweeper from '../minesweeper';

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // tile: new Minesweeper.tile()
            state : this.props.tile 
        }
        // this.props.status = this.statusChecker();
        // this.statusChecker = this.statusChecker.bind(this)();
        
    }
    
    statusChecker(){
        for (const prop in this.props.tile){
            console.log(prop);
            if(prop === true) this.props.tile.status = this[prop];
        }
    }

    render(){
        return <div className="tile" className={this.status}>Im lil tile :3</div>
    }
}

export default Tile;