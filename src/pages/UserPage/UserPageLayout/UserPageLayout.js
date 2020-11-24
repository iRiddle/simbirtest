import React from 'react';

import User from '../../../components/User';

const UserPageLayout = ({ user, tasks, isShownTask, getTasks }) => {
    return (
        !!Object.keys(user).length && (
            <User user={user} tasks={tasks} isShownTask={isShownTask} getTasks={getTasks} />
        )
    )
}

export default UserPageLayout