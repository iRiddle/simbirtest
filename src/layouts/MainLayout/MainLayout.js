import React from 'react';

import Header from '../../components/Header';

import './MainLayout.scss';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">
                <div className='main__container'>
                    {children}
                </div>
            </main>
        </>
    )
}

export default MainLayout
