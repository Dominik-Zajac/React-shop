import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = props => {
    return (
        <div>
            <Header />
            <div className='container-fluid'>
                {props.children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout;