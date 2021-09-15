import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const initialState = {
        user: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialState);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="card mx-auto" style={{ width: "25rem" }}>
            <div className="card-header bg-info">
                <h3 className="m-0 fw-bold text-center">SignIn</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" onChange={handleChange} name="user" id="user" className="form-control" placeholder="User" />
                        <label htmlFor="user">User</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" onChange={handleChange} name="password" id="password" className="form-control" placeholder="Password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="mb-3 d-grid gap-2">
                        <button type="submit" className="btn btn-warning">SignIn</button>
                    </div>
                </form>
            </div>
            <div className="card-footer d-grid">
                <Link to="/register" className="btn btn-outline-dark">SignUp</Link>
            </div>
        </div>
    )
}

export default Login
