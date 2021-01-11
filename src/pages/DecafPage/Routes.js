import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import DecafLayout from '../../layouts/DecafLayout';

const DecafPage = lazy(() => import('./index'));
const AttendingPage = lazy(() => import('./AttendingPage'));

class DecafRoutes extends React.Component {
    withDecafLayout(Child, isCompany) {
        return () => (
            <DecafLayout isCompany={isCompany}>
                <Child />
            </DecafLayout>
        );
    }

    render() {
        return (
            <Switch>
                <Route
                    path="/decaf/"
                    exact
                    component={this.withDecafLayout(DecafPage, false)}
                />
                <Route
                    path="/decaf/companies"
                    exact
                    component={this.withDecafLayout(DecafPage, true)}
                />
                <Route
                    path="/decaf/attending"
                    exact
                    component={AttendingPage}
                />
            </Switch>
        );
    }
}

export default DecafRoutes;
