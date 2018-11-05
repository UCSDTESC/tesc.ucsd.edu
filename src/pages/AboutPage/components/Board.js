import React from 'react';
import BoardMember from './BoardMember';
import board from '../../../data/BoardData';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currActive: -1}

        this.setActive = this.setActive.bind(this);
    }

    setActive(newActive) {
        this.setState({currActive: newActive});
    }

    renderMembers(board) {

        const chunks = board.reduce((a,b,i,g) => !(i % 4) ? a.concat([g.slice(i,i+4)]) : a, []);        
        const {currActive} = this.state;

        return chunks.map((chunk, j) => {
            return (
                <div className="row board__row">
                    {chunk.map((m, i) => <BoardMember 
                        onActive={this.setActive} 
                        isActive={((j * 4) + i) === currActive} 
                        data={m}
                        val={j * 4 + i}
                        idx={i}
                    />)}
                </div>
            );
        })
    }

    render() {
        return (
            <div className="board__body pb-3">
                <div className="text-center board__body-small pt-5">
                    Our Team
                </div>
                <div className="text-center board__body-big">
                    Executive Board
                    <div className="container mt-3 p-0">
                        {this.renderMembers(board)}
                    </div>
                </div>
        </div>
        );
    }
}

export default Board;