import React from 'react'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify';

function Layout(props) {
    return (
        <>
            <Navbar />
            <ToastContainer theme="dark" />
            <div className="container mt-5">
                {props.children}
            </div>
        </>
    )
}

export default Layout
