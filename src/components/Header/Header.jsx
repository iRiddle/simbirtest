import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.scss'

const Header = () => (
    <header className='header'>
        <div className='header__container'>
            <NavLink to='/'>
                <img src={logo} alt='Users test' className='header__logo' />
            </NavLink>
            <span className='header__title'>Test</span>
        </div>
    </header>
)


export default Header
