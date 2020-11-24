import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import UsersPage from '../../pages/UsersPage';
import UserPage from '../../pages/UserPage';
import NotFoundPage from '../../pages/NotFoundPage';

const RootRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <UsersPage />
                </Route>
                <Route path="/users" exact>
                    <UsersPage />
                </Route>
                <Route path="/users/:id">
                    <UserPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default RootRouter
