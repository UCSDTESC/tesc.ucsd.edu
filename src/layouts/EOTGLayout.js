import React from 'react';

import Footer from '../pages/EOTGPage/components/Footer';

class EOTGLayout extends React.Component {

    render() {
        return (
            <>
                <div id="eotg-main">
                    {React.cloneElement(this.props.children, {...this.props})}
                    {/*<Footer {...this.props}/>*/}
                </div>

            </>
        )
    }

}

export default EOTGLayout;

