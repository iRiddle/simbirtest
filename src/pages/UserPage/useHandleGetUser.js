import { useState, useEffect } from 'react'

import UserService from '../../services/UserService'

export const useHandleGetUser = () => {
    const [user, handleGetUser] = useState({});
    const [isShownTask, handleShowTasks] = useState(false);
    const [tasks, handleGetTasks] = useState([]);
    const [isLoading, handleLoading] = useState(true)

    const currentUserId = window.location.pathname.split('/')[2];

    useEffect(() =>
        UserService.getUser(currentUserId)
            .then(data => {
                handleGetUser(data[0]);
                handleLoading(false)
            }),
        [currentUserId])

    const getTasks = (userId) => {
        if (isShownTask) {
            return resetState();
        }
        UserService.getTasksByUser(userId).then(data => {
            handleGetTasks(data);
            handleShowTasks(true);
        })
    }

    const resetState = () => {
        handleShowTasks();
        handleGetTasks([]);
    }

    return { user, tasks, isShownTask, isLoading, getTasks }
}