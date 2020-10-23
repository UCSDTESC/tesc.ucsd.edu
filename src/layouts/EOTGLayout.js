import React from 'react';

class EOTGLayout extends React.Component {
    render() {
        return (
            <>
                <div id="eotg-main">
                    {React.cloneElement(this.props.children, { ...this.props })}
                    {/*<Footer {...this.props}/>*/}
                </div>
            </>
        );
    }
}

export default EOTGLayout;
