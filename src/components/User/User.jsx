import React from 'react';
import Task from '../Task';
import { pseudoAvatar } from '../../constants/userConstants';
import './User.scss';

const User = ({ user, tasks, isShownTask, getTasks }) => {
    const {
        id,
        name,
        username,
        email,
        avatar,
        address: { city, street, suite, zipcode },
        phone,
        website,
        company: { name: companyName }
    } = user
    return (
        <article className='user'>
            <div className='user__container'>
                <div className='user__top-info'>
                    <img src={avatar ? avatar : pseudoAvatar} alt={name} className='user__avatar' />
                    <div className='user__info-container'>
                        <div className='user__info-primary'>
                            <h2>{name}</h2>
                            <span>{`${city} ${street} ${suite}`}</span>
                            <span>{zipcode}</span>
                        </div>
                        <hr className='user__divider' />
                        <div className='user__info-secondary'>
                            <div className='user__info-field'>
                                <span>Email:</span>
                                <span>{email}</span>
                            </div>
                            <div className='user__info-field'>
                                <span>Username:</span>
                                <span>{username}</span>
                            </div>
                            <div className='user__info-field'>
                                <span>City:</span>
                                <span>{city}</span>
                            </div>
                            <div className='user__info-field'>
                                <span>Phone:</span>
                                <span>{phone}</span>
                            </div>
                            <div className='user__info-field'>
                                <span>Company Name:</span>
                                <span>{companyName}</span>
                            </div>
                            <div className='user__info-field'>
                                <span>Website:</span>
                                <span>{website}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='user__tasks'>
                    {tasks.map(({ id, completed, title }) => <Task key={id} completed={completed} title={title} />)}
                    <button className='user__tasks-btn' onClick={() => getTasks(id)}>
                        {isShownTask ? 'Hide Tasks' : 'Show Tasks'}
                    </button>
                </div>
            </div>
        </article>
    )
}

export default User
