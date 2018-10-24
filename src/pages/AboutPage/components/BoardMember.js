import React from 'react';

class Board extends React.Component {

    render() {
        const {data} = this.props

        return (
            <div className="col-md-3 board__member">
                <img src={data.img} className="board__member-img" />
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