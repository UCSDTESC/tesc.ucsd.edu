import {Switch, Route, withRouter} from 'react-router-dom';
import React from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OrgPage from './pages/HomePage/OrgPage';
import AboutPage from './pages/AboutPage';
import MembershipPage from './pages/MembershipPage';
import SpacesPage from './pages/SpacesPage';
import FinancePage from './pages/FinancePage';
import NotFoundPage from './pages/NotFoundPage';

class Routes extends React.Component {

    withLayout(Child, isOrgs=false) {
        return (props) => 
            (<React.Fragment>
                <Nav isOrgs={isOrgs}/>
                <div id="main">
                    <Child />
                </div>
                <Footer />
            </React.Fragment>);
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
                <Route component={this.withLayout(NotFoundPage)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);