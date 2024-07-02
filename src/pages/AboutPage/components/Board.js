import React, { useState } from 'react';
import BoardMember from './BoardMember';
import board from '../../../data/BoardData';

function Board(props) {

    const [currActive, setCurrActive] = useState(-1);

    const renderMembers = (board) => {

        const chunks = board.reduce((a,b,i,g) => !(i % 5) ? a.concat([g.slice(i,i+5)]) : a, []);        

        return chunks.map((chunk, j) => {
            return (
                <div className="row board__row">
                    {chunk.map((m, i) => <BoardMember 
                        onActive={setCurrActive} 
                        isActive={((j * 5) + i) === currActive} 
                        data={m}
                        val={j * 5 + i}
                        idx={i}
                    />)}
                </div>
            );
        })
    }

    return (
        <div className="board__body pb-3">
            <div className="text-center board__body-small pt-5">
                Our Team
            </div>
            <div className="text-center board__body-big">
                Executive Board
                <div className="container mt-3 p-0">
                    {renderMembers(board)}
                </div>
            </div>
        </div>
    );
}

export default Board;