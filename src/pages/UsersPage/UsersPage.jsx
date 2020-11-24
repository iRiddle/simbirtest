import React from 'react';
import Pagination from 'rc-pagination';

import MainLayout from '../../layouts/MainLayout';

import UsersPageLayout from './UsersPageLayout';
import Loader from '../../components/Loader'
import { useHandleGetUsers } from './useHandleGetUsers';

const UsersPage = () => {
    const headers = [{ id: 1, title: 'Name' }, { id: 2, title: 'Username' }, { id: 3, title: 'Email' }, { id: 4, title: 'Address' }];
    const {
        users,
        isLoading,
        sortByField,
        allCompanies,
        filterCompany,
        getCurrentPage,
        getCurrentCompany
    } = useHandleGetUsers();

    return (
        <MainLayout>
            {isLoading ? <Loader /> : (
                <>
                    <UsersPageLayout
                        headers={headers}
                        users={users}
                        allCompanies={allCompanies}
                        filterCompany={filterCompany}
                        sortByField={sortByField}
                        getCurrentCompany={getCurrentCompany}
                    />
                    {filterCompany === '' && <Pagination total={10} pageSize={3} onChange={getCurrentPage} />}
                </>
            )}
        </MainLayout>
    )
}

export default UsersPage