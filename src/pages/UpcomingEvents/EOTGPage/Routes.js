import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

import EOTGLayout from '../../../layouts/EOTGLayout';

const EOTGPage = lazy(() => import('./index'));

class UpcomingEOTGRoutes extends React.Component {

    withEOTGLayout(Child) {
        return () =>
            (<EOTGLayout>
                <Child />
            </EOTGLayout>)
    }

    render() {
        return (
            <Switch>
                <Route path="/upcomingevents/eotg/" exact component={this.withEOTGLayout(EOTGPage)}/>
            </Switch>
        )
    }
}

export default UpcomingEOTGRoutes;