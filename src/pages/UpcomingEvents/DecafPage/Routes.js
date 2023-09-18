import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import DecafLayout from '../../../layouts/DecafLayout';

const DecafPage = lazy(() => import('./index'));
const AttendingPage = lazy(() => import('./AttendingPage'));

class UpcomingDecafRoutes extends React.Component {
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
                    path="/upcomingevents/decaf/"
                    exact
                    component={this.withDecafLayout(DecafPage, false)}
                />
                <Route
                    path="/upcomingevents/decaf/companies"
                    exact
                    component={this.withDecafLayout(DecafPage, true)}
                />
                <Route
                    path="/upcomingevents/decaf/attending"
                    exact
                    component={AttendingPage}
                />
            </Switch>
        );
    }
}

export default UpcomingDecafRoutes;
