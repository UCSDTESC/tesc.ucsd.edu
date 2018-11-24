import React from 'react';

import Nav from '../pages/DecafPage/components/Nav';
import Footer from '../pages/DecafPage/components/Footer';

class DecafLayout extends React.Component {

    render() {
        return (
            <>
                <div id="decaf-main">
                    {React.cloneElement(this.props.children, {...this.props})}
                    <Footer />
                </div>

            </>
        )
    }
}

export default DecafLayout;

