import React from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
class Board extends React.Component {




    render() {
        const {data} = this.props

        return (
            <div className="col-md-3 board__member" >
                <div src={data.img} className="board__member-img" style={{backgroundImage: `url(${data.img})`}}> </div>
                <div className="text-center board__member-name">
                    {data.name}
                </div>
                <div className="text-center board__member-title">
                    {data.role}
                </div>
            </div>
        );
    }
}

export default Board;