import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserFront from "@userfront/react"

UserFront.init("demo1234")
function Dashboard(props) {
    const navigate = useNavigate();
    if (!UserFront.accessToken()) {
        return (
            navigate("/login")
        )
    }
    const userData = JSON.stringify(UserFront.user, null, 2);
    return (
        <div>
            <h2>Dashboard</h2>
            <pre>{userData}</pre>
            <button onClick={UserFront.logout}>LogOut</button>
        </div>
    )
}
export default Dashboard;