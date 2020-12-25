import React from 'react';

import Footer from '../pages/DecafPage/components/Footer';
import Nav from '../pages/DecafPage/components/Nav';

class DecafLayout extends React.Component {
    render() {
        return (
            <>
                <div className="decaf-main">
                    <Nav isCompany={this.props.isCompany} />
                    {React.cloneElement(this.props.children, { ...this.props })}
                    <Footer {...this.props} />
                </div>
            </>
        );
    }
}

export default DecafLayout;
