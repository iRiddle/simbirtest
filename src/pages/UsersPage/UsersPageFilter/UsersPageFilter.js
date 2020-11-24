import React from 'react'
import cn from 'classnames'

import './UsersPageFilter.scss'

const UsersPageFilter = ({ filterCompany, allCompanies, getCurrentCompany }) => {
    return (
        <div className={cn('filter', 'main__filter')}>
            <div className='filter__container'>
                <span className='filter__legend'>By company:</span>
                <select value={filterCompany} onChange={getCurrentCompany} className='filter__select'>
                    <option value={''}>None</option>
                    {allCompanies.map(({ name, bs }) =>
                        <option key={name+bs} value={name}>{name}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default UsersPageFilter
