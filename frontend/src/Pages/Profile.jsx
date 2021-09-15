import React from 'react'

function Profile() {
    return (
        <div className="card-body shadow bg-body rounded mx-auto text-center" style={{ width: "25rem" }}>
            <h3>Welcome <strong className="text-uppercase">FULLNAME</strong></h3>
            <p className="text-white fw-bold text-uppercase m-0 bg-secondary rounded p-2">User</p>
        </div>
    )
}

export default Profile
