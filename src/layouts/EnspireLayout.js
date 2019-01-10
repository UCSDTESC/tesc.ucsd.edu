import React from 'react';

import Footer from '../pages/EnspirePage/components/Footer';

class EnspireLayout extends React.Component {

    render() {
        return (
            <>
                <div id="enspire-main">
                    {React.cloneElement(this.props.children, {...this.props})}
                    <Footer />
                </div>
            </>
        )
    }
}

export default EnspireLayout;

