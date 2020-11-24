import React from 'react';
import './UsersPageHeader.scss';

const UsersPageHeader = ({ headers, sortByField }) => (
    <thead>
        <tr className='user'>
            {headers.map(({ id, title }) =>
                <th key={id} onClick={() => sortByField(title.toLowerCase())} className='users__header-item'>
                    {title}
                </th>
            )}
        </tr>
    </thead>
)

export default UsersPageHeader