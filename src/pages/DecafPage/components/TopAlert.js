import React, {Component} from 'react';
import {Alert} from 'reactstrap';

class TopAlert extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }
        this.onDismiss = this.onDismiss.bind(this);
    }
  
    onDismiss() {
      this.setState({ visible: false });
    }

    render() {
        return (
            <Alert 
                color={this.props.color || 'info'} 
                isOpen={this.state.visible} 
                toggle={this.onDismiss}
                className="m-0"
                fade={false}
            >
                {this.props.copy}
            </Alert>
        )
    }

}

export default TopAlert;