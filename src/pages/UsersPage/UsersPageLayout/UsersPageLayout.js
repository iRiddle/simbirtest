import React from 'react';

import UsersPageFilter from '../UsersPageFilter'
import UsersPageHeader from '../UsersPageHeader';
import UsersPageBody from '../UsersPageBody';

import './UsersPageLayout.scss';

const UsersPageLayout = ({ headers, users, allCompanies, filterCompany, sortByField, getCurrentCompany }) => {
    return (
        <>
            <UsersPageFilter filterCompany={filterCompany} allCompanies={allCompanies} getCurrentCompany={getCurrentCompany} />
            <table className='users'>
                <UsersPageHeader headers={headers} sortByField={sortByField} />
                <UsersPageBody users={users} />
            </table>
        </>
    )
}

export default UsersPageLayout
