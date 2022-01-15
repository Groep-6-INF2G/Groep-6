import React from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import IsAuthenticated from './isAuthenticated'

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = { isAuth: false };

        IsAuthenticated().then((res) => {
            if (res === 200) {
                this.setState({ isAuth: true })
            }
        })
    }
    render() {
        if (this.state.isAuth) {
            return (
                <div id="content">
                    <privateRoute />
                </div>
            );
        }
        return (
            <div id="content">
                <PublicRoute />
            </div>
            )
        
    }
}
