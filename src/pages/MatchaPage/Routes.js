import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const MatchaPage = lazy(() => import('./index'));

const MatchaRoutes = () => {
    return (
        <Switch>
            <Route path="/matcha/" exact component={() => <MatchaPage />} />
        </Switch>
    );
};
export default MatchaRoutes;
