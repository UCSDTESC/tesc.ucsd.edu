import React from 'react';
import {Route, Switch} from 'react-router-dom';

import DecafLayout from '../../layouts/DecafLayout';
import DecafPage from './index';

class DecafRoutes extends React.Component {

    withDecafLayout(Child, isCompany) {
        return () =>
            (<DecafLayout isCompany={isCompany}>
                <Child />
            </DecafLayout>)
    }

    render() {
        return (
            <Switch>
                <Route path="/decaf/" exact component={this.withDecafLayout(DecafPage, false)}/>
                <Route path="/decaf/companies" exact component={this.withDecafLayout(DecafPage, true)}/>
            </Switch>
        )
    }
}

export default DecafRoutes;