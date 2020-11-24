import { useState, useEffect, useCallback } from 'react';
import UserService from '../../services/UserService';

export const useHandleGetUsers = () => {
    const [users, handleGetUsers] = useState([]);
    const [paginationU, handlePaginationU] = useState([]);

    const [isLoading, handleLoading] = useState(true);
    const [sortField, handleSortField] = useState('');
    const [currentPage, handleCurrentPage] = useState(-1);

    const [filterCompany, handleFilterCompany] = useState('')
    const [allCompanies, handleAllCompanies] = useState([])

    const sortByField = (field) => {
        handleSortField(field);
    }

    const getCurrentPage = (page) => {
        handleCurrentPage(page)
    }

    const getCurrentCompany = (e) => {
        handleFilterCompany(e.target.value)
    }

    const filterByPage = useCallback(() => {
        switch (currentPage) {
            case 1: return handleGetUsers([...paginationU.slice(0, 3)])
            case 2: return handleGetUsers([...paginationU.slice(3, 6)])
            case 3: return handleGetUsers([...paginationU.slice(6, 9)])
            case 4: return handleGetUsers([...paginationU.slice(9)])
            default: return []
        }
    }, [currentPage, paginationU])

    const prepareArrayToSort = useCallback(() => {
        const sortedArray = [...users].sort((a, b) => {
            if (sortField === 'address') {
                return ('' + a[sortField]['city']).localeCompare(b[sortField]['city']);
            }
            return ('' + a[sortField]).localeCompare(b[sortField]);
        })

        return handleGetUsers(sortedArray);
    }, [sortField])

    const getCompanies = useCallback(() => {
        if (filterCompany && filterCompany.length > 0) {
            handleGetUsers(paginationU.filter(item => item.company.name === filterCompany))
        } else {
            filterByPage()
        }
    }, [filterCompany, filterByPage, paginationU])

    useEffect(() => {
        UserService.getUsers()
            .then(data => {
                handleGetUsers(data);
                handlePaginationU(data);
                handleSortField('name');
                handleCurrentPage(1);
                handleAllCompanies(data.map(({ company }) => { return { id: company.bs, name: company.name } }))
                handleLoading(false);
            })
    }, []);

    useEffect(() => {
        prepareArrayToSort();
    }, [prepareArrayToSort])


    useEffect(() => {
        filterByPage()
    }, [filterByPage])

    useEffect(() => {
        getCompanies()
    }, [getCompanies])

    return { isLoading, users, filterCompany, allCompanies, sortByField, getCurrentPage, getCurrentCompany }
}