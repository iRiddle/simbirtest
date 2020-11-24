import React from 'react';
import cn from 'classnames';

import './Task.scss';

const Task = ({ title, completed }) => {
    return (
        <div className={cn('task', 'user__task')}>
            <div className='task__container'>
                <h3>{title}</h3>
                <input type='checkbox' checked={completed} disabled />
            </div>
        </div>
    )
}

export default Task