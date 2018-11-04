import React from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        }

        this.show = this.show.bind(this);
    }

    show() {
        const curr = $(findDOMNode(this)).find('.board__member-full').eq(0);
        const id = this.props.data.role.toLowerCase().replace(/ /g, '');
        $('.board__member-full').each((i, e) => {
            const parentId = e.parentNode.getAttribute('id');
            if (parentId !== id) {
                $(e).slideUp()
            }
        }).promise().done(() => {
            setTimeout(curr.slideToggle(), 50);
        })
        this.setState({showFull: !this.state.showFull});
    }

    render() {
        const {data, idx} = this.props
        const id = data.role.toLowerCase().replace(/ /g, '');
        const firstName = data.name.split(' ')[0];
        return (
            <>
                <div className="col-md-3 m-0 px-1 py-1" id={id}>
                    <div className="board__member" onClick={this.show}>
                        <div src={data.img} className="board__member-img" style={{backgroundImage: `url(${data.img})`}}> </div>
                        <div className="text-center board__member-name">
                            {data.name}
                        </div>
                        <div className="text-center board__member-title">
                            {data.role}
                        </div>
                    </div>
                    <div className={`board__member-full board__member-full-${idx}`}>
                    
                        <div className="full__title">
                            {data.role}
                        </div>
                        <div className="full__name">
                            {data.name}
                        </div>

                        <p className="full__bio">
                            {data.bio}
                        </p>
                    
                        <div className="full__connect">
                            Connect with {firstName} on <a target="_blank" href={data.link}> LinkedIn <i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <div className="full__connect">
                            Email {firstName} at <a target="_blank" href={'mailto:' + data.email}> {data.email} <i class="far fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Board;