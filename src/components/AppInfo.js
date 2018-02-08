import React from 'react';
import Footer from './Footer';
import Header from './Header';

const AppInfo = (props) => {
    console.log(props.match.params);
    return (
        <div>
            <Header />
            This is the App Info page
            <Footer />
        </div>
    );
}

export default AppInfo;
