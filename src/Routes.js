import {Switch, Route} from 'react-router-dom';
import React from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import OrgPage from './pages/HomePage/OrgPage';

class Routes extends React.Component {

    withLayout(Child, isOrgs=false) {
        return (props) => 
            (<React.Fragment>
                <Nav isOrgs={isOrgs}/>
                <div id="main">
                    <Child />
                </div>
            </React.Fragment>);
    }

    render() {
        return  (
            <Switch>
                <Route exact path="/" component={this.withLayout(HomePage)}/>
                <Route exact path="/orgs" component={this.withLayout(OrgPage, true)}/>
                <Route exact path="/orgs/membership" component={this.withLayout(OrgPage, true)}/>
            </Switch>
        )
    }
}

export default withRouter(Routes);