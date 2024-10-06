import React from 'react'
import { useSelector } from 'react-redux'
import react from './../../src/logo.svg'

function Navbar() {
    const amount = useSelector(state => state.amount)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={react} alt='react' width='40px' height='40px' />
                    <a className="navbar-brand" href="/">My React Learning Website</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='btn btn-primary' disabled='true'>Your Balance: {amount}</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
