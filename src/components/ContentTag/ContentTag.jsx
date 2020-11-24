import React from 'react';
import { NavLink } from 'react-router-dom';

const Td = ({ children, to, className }) => {
    const ContentTag = to ? NavLink : 'div';
    return (
        <td className={className}>
            <ContentTag to={to}>{children}</ContentTag>
        </td>
    );
}

export default Td