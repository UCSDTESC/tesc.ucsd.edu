import {Switch, Route, withRouter} from 'react-router-dom';
import React from 'react';
import asyncComponent from './asyncComponent'

import Layout from './layouts/Layout';

import DecafRoutes from './pages/DecafPage/Routes';
import EnspireRoutes from './pages/EnspirePage/Routes'

const HomePage = asyncComponent(() => import('./pages/HomePage'));
const OrgPage = asyncComponent(() => import('./pages/HomePage/OrgPage'));
const AboutPage = asyncComponent(() => import('./pages/AboutPage'));
const MembershipPage = asyncComponent(() => import('./pages/MembershipPage'));
const SpacesPage = asyncComponent(() => import('./pages/SpacesPage'));
const FinancePage = asyncComponent(() => import('./pages/FinancePage'));
const NotFoundPage = asyncComponent(() => import('./pages/NotFoundPage'));

class Routes extends React.Component {

    withLayout(Child, isOrgs=false) {
        return () => 
            (<Layout isOrgs={isOrgs}>
                <Child />
            </Layout>)
    }

    render() {
        return  (
            <Switch>
                <Route exact path="/" component={this.withLayout(HomePage)}/>
                <Route exact path="/orgs" component={this.withLayout(OrgPage, true)}/>
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/orgs/membership" component={this.withLayout(MembershipPage, true)}/>
                <Route exact path="/orgs/spaces" component={this.withLayout(SpacesPage, true)}/>
                <Route exact path="/orgs/finance" component={this.withLayout(FinancePage, true)}/>

                <Route path='/decaf' component={DecafRoutes} />
                <Route path='/enspire' component={EnspireRoutes} />

                <Route component={this.withLayout(NotFoundPage)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);