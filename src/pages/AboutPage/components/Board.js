import React from 'react';
import BoardMember from './BoardMember';
import board from '../../../data/BoardData';

class Board extends React.Component {

    renderMembers(board) {

        const chunks = board.reduce((a,b,i,g) => !(i % 4) ? a.concat([g.slice(i,i+4)]) : a, []);        

        return chunks.map(chunk => {
            return (
                <div className="row board__row">
                    {chunk.map((m, i) => <BoardMember data={m} idx={i}/>)}
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