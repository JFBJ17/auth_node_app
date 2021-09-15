import React, { useState } from 'react';
import * as Auth from '../Config/auth';
import { toast } from 'react-toastify';

function Register() {

    const initialState = {
        fullname: '',
        user: '',
        password: ''
    }

    const [userData, setUserData] = useState(initialState);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await Auth.signup(userData);
        if (response.data.message !== "Created user") return toast.error("Error al crear usuario");
        setUserData(initialState)
        return toast.success(response.data.message);
    }

    return (
        <div className="card mx-auto" style={{ width: "25rem" }}>
            <div className="card-header bg-warning">
                <h3 className="m-0 fw-bold text-center">SignUp</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" onChange={handleChange} value={userData.fullname} name="fullname" id="fullname" className="form-control" placeholder="FullName" />
                        <label htmlFor="fullname">FullName</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" onChange={handleChange} value={userData.user} name="user" id="user" className="form-control" placeholder="User" />
                        <label htmlFor="user">User</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" onChange={handleChange} value={userData.password} name="password" id="password" className="form-control" placeholder="Password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="mb-3 d-grid gap-2">
                        <button type="submit" className="btn btn-success">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
