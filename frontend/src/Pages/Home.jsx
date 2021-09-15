import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="card-body bg-danger shadow rounded text-center">
            <Link to="/signin" className="text-white fw-bold fs-4">STARTING</Link>
        </div>
    )
}

export default Home
