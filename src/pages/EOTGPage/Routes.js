import React from 'react';
import {Route, Switch} from 'react-router-dom';

import asyncComponent from '../../asyncComponent';

import EOTGLayout from '../../layouts/EOTGLayout';

const EOTGPage = asyncComponent(() => import('./index'));

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