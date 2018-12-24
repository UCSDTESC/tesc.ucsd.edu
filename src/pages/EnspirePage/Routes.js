import React from 'react';
import {Route} from 'react-router-dom';
import EnspireLayout from '../../layouts/EnspireLayout';
import EnspirePage from './index';
class DecafRoutes extends React.Component {

    withEnspireLayout(Child) {
        return () =>
            (<EnspireLayout>
                <Child />
            </EnspireLayout>)
    }

    render() {
        return (
            <>
                <Route path="/enspire/" exact component={this.withEnspireLayout(EnspirePage)}/>
            </>
        )
    }
}

export default DecafRoutes;