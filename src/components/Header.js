import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const {Component} = props
    const style = {
        display: 'inline-block',
        margin: 10
    }
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                    <ul className="nav navbar-nav">
                        <h2 className="navbar-brand">Portfolio</h2>
                        <li className="nav-item" style={style}>
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item" style={style}>
                            <Link to='/jokes' className="nav-link">Jokes</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Component />
        </div>
    )
}

export default Header