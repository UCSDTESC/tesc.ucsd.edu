import React from 'react';
import {Route} from 'react-router-dom';
import Hero from './components/Hero'
import DecafLayout from '../../layouts/DecafLayout';
import DecafPage from './index';
class DecafRoutes extends React.Component {

    withDecafLayout(Child, isCompany=true) {
        return () =>
            (<DecafLayout isCompany={isCompany}>
                <Child />
            </DecafLayout>)
    }

    render() {
        return (
            <>
                <Route path="/decaf/" component={this.withDecafLayout(DecafPage)}/>
            </>
        )
    }
}

export default DecafRoutes;