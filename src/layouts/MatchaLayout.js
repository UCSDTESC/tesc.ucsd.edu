import React from 'react';

import Header from '../pages/MatchaPage/components/Header';
import Footer from '../pages/MatchaPage/components/Footer';

const MatchaLayout = ({ children }) => {
    return (
        <>
            <div id="matcha-main">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default MatchaLayout;
