import React from 'react';

import Header from '../pages/EnspirePage/components/Header';
import Footer from '../pages/EnspirePage/components/Footer';

const EnspireLayout = ({ children }) => {
    return (
        <>
            <div className="enspire-main">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default EnspireLayout;
