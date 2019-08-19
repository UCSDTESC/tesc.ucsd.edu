import React from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
class BoardMember extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        }

        this.click = this.click.bind(this);
    }

    hide() {
        const curr = $(findDOMNode(this)).find('.board__member-full').eq(0);
        curr.hide();
        this.setState({showFull: false})
    }

    componentDidUpdate() {
        if((!this.props.isActive && this.state.showFull)) {
            this.hide();
        }
        if (this.props.isActive && !this.state.showFull) {
            this.show()
        }
    }

    show() {
        const curr = $(findDOMNode(this)).find('.board__member-full').eq(0);
        curr.slideDown();
        this.setState({showFull: true})
    }

    click() {
        if (this.state.showFull) {
            return this.props.onActive(-1);
        }
        this.props.onActive(this.props.val);
    }

    render() {
        const {data, idx} = this.props
        const id = data.role.toLowerCase().replace(/ /g, '');
        const firstName = data.name.split(' ')[0];
        const {showFull} = this.state;
        return (
            <>
                <div className="col-md-3 m-0 px-1 py-1" id={id}>
                    <div className={((showFull) ? `board__member-active-${idx}` : 'board__member')} onClick={this.click}>
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
                    
                        {data.link && <div className="full__connect">
                            Connect with {firstName} on <a target="_blank" href={data.link}> <span>LinkedIn</span> <i class="fab fa-linkedin-in"></i></a>
                        </div>}
                        <div className="full__connect">
                            Email {firstName} at <a target="_blank" href={'mailto:' + data.email}> <span>{data.email}</span> <i class="far fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BoardMember;