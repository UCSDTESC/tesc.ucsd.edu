import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Layout extends React.Component {

    render() {
        return (
            <>
                <Nav isOrgs={this.props.isOrgs}/>
                <div id="main">
                    {this.props.children}
                </div>
                <Footer />
            </>
        )
    }
}

export default Layout;

