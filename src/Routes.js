import { Switch, Route, withRouter } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { Spinner } from 'reactstrap';

import Layout from './layouts/Layout';

import DecafRoutes from './pages/DecafPage/Routes';
import MatchaRoutes from './pages/MatchaPage/Routes';
import EnspireRoutes from './pages/EnspirePage/Routes';
import EOTGRoutes from './pages/EOTGPage/Routes';
import UpcomingEOTGRoutes from './pages/UpcomingEvents/EOTGPage/Routes'
import UpcomingDecafRoutes from './pages/UpcomingEvents/DecafPage/Routes';
import HomePage from './pages/HomePage';

const OrgPage = lazy(() => import('./pages/HomePage/OrgPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Newsletter = lazy(() => import('./pages/Newsletter'));
const MembershipPage = lazy(() => import('./pages/MembershipPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const SpacesPage = lazy(() => import('./pages/SpacesPage'));
const FinancePage = lazy(() => import('./pages/FinancePage'));
const MembersPage = lazy(() => import('./pages/MembersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LoadingSpinner(props) {
    return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <Spinner animation="border" role="status" size="xl" />
        </div>
    );
}

function Routes() {
    const withLayout = (Child, isOrgs = false) => {
        return () => (
            <Layout isOrgs={isOrgs}>
                <Child />
            </Layout>
        );
    };

    useEffect(() => {
        console.log(
            '%c Interested in building awesome web projects? Email us at hello@tesc.ucsd.edu! ',
            `
            background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); 
            color: black; 
            font-size: 2rem; 
            text-align: center`
        );
    }, []);

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Switch>
                <Route exact path="/" component={withLayout(HomePage)} />
                <Route
                    exact
                    path="/orgs"
                    component={withLayout(OrgPage, true)}
                />
                <Route exact path="/about" component={() => <AboutPage />} />
                <Route exact path="/signup" component={() => <Newsletter />} />
                <Route
                    exact
                    path="/members"
                    component={withLayout(MembersPage)}
                />
                <Route
                    exact
                    path="/orgs/membership"
                    component={withLayout(MembershipPage, true)}
                />
                <Route
                    exact
                    path="/orgs/faqs"
                    component={withLayout(FAQPage, true)}
                />
                {/* <Route
                    exact
                    path="/orgs/spaces"
                    component={withLayout(SpacesPage, true)}
                /> */}
                <Route
                    exact
                    path="/orgs/finance"
                    component={withLayout(FinancePage, true)}
                />

                <Route path="/decaf" component={DecafRoutes} />
                <Route path="/matcha" component={MatchaRoutes} />
                <Route path="/enspire" component={EnspireRoutes} />
                <Route path="/eotg" component={EOTGRoutes} />
                <Route path="/upcomingevents/eotg" component={UpcomingEOTGRoutes} />
                <Route path="/upcomingevents/decaf" component={UpcomingDecafRoutes} />

                <Route component={withLayout(NotFoundPage)} />
            </Switch>
        </Suspense>
    );
}

export default withRouter(Routes);
