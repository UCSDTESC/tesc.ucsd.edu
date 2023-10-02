import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

import EOTGLayout from '../../layouts/EOTGLayout';

const EOTGPage = lazy(() => import('../UpcomingEvents/EOTGPage/index'));

class EOTGRoutes extends React.Component {

    withEOTGLayout(Child) {
        return () =>
            (<EOTGLayout>
                <Child />
            </EOTGLayout>)
    }

    render() {
        return (
            <Switch>
                <Route path="/eotg/" exact component={this.withEOTGLayout(EOTGPage)}/>
            </Switch>
        )
    }
}

export default EOTGRoutes;