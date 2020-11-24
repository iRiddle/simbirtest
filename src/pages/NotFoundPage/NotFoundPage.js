import React from 'react';
import { NavLink } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';

import supportSvg from '../../assets/support.svg';

import './NotFoundPage.scss';

const NotFound = () => {
    return (
        <MainLayout>
            <div className='not-found'>
                <h1>404 Not Found</h1>
                <img src={supportSvg} alt='404 not found' />
                <NavLink to="/" className='not-found__link'>Go to Main Page</NavLink>
            </div>
        </MainLayout>
    )
}

export default NotFound
