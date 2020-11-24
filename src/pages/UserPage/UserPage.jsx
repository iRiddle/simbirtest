import React from 'react';

import MainLayout from '../../layouts/MainLayout'

import UserPageLayout from './UserPageLayout'

import Loader from '../../components/Loader'

import { useHandleGetUser } from './useHandleGetUser';

const UserPage = () => {
    const { user, tasks, isShownTask, isLoading, getTasks } = useHandleGetUser();
    return (
        <MainLayout>
            {isLoading ? <Loader /> : (
                <UserPageLayout
                    user={user}
                    tasks={tasks}
                    isShownTask={isShownTask}
                    getTasks={getTasks}
                />
            )}
        </MainLayout>
    )
}

export default UserPage
