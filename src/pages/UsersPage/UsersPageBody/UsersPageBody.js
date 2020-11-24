import React from 'react';

import ContentTag from '../../../components/ContentTag';

import './UsersPageBody.scss';

const UsersPageBody = ({ users }) => {
    return (
        <tbody>
            {users.map(({ id, name, username, email, address: {
                city, street, suite
            } }) =>
                <tr key={id} className='users__row'>
                    <ContentTag to={`/users/${id}`} className='users__field'>
                        {name}
                    </ContentTag>
                    <ContentTag to={`/users/${id}`} className='users__field'>
                        {username}
                    </ContentTag>
                    <ContentTag to={`/users/${id}`} className='users__field'>
                        {email}
                    </ContentTag>
                    <ContentTag to={`/users/${id}`} className='users__field'>
                        {`${city} ${street} ${suite}`}
                    </ContentTag>
                </tr>
            )}
        </tbody >
    )
}

export default UsersPageBody
