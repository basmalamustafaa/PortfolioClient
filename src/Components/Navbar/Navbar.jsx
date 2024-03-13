import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { windows } from 'fontawesome'
export default function Navbar() {

    let [navbar, setNavbar] = useState(false)


    const ChangePadding = () => {
        if (window.scrollY > 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }


    window.addEventListener('scroll', ChangePadding)



    return (
        <div>

            {navbar ? <nav className={`navbar active1 navbar-expand-lg navbar-dark fixed-top ${styles.navv2}`} >
                <Link to='/' className="navbar-brand text-white text-uppercase fw-bolder fs-2 mx-5" >START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-lg-auto text-white text-uppercase fw-bolder fs-6 mx-lg-5">
                        <li className="nav-item me-auto ">
                            <NavLink to='about' className="nav-link text-white me-2">About </NavLink>
                        </li>
                        <li className="nav-item me-auto">
                            <NavLink to='portifolio' className="nav-link text-white me-2" >Portfolio</NavLink>
                        </li>
                        <li className="nav-item me-auto ">
                            <NavLink to='contact' className="nav-link text-white me-2" >Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </nav> : 
                <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navvv}`} >
                <Link to='/' className="navbar-brand text-white text-uppercase fw-bolder fs-2 mx-5" >START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-lg-auto text-white text-uppercase fw-bolder fs-6 mx-lg-5">
                        <li className="nav-item me-auto ">
                            <NavLink to='about' className="nav-link text-white me-2">About </NavLink>
                        </li>
                        <li className="nav-item me-auto">
                            <NavLink to='portifolio' className="nav-link text-white me-2" >Portfolio</NavLink>
                        </li>
                        <li className="nav-item me-auto ">
                            <NavLink to='contact' className="nav-link text-white me-2" >Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </nav> }

        </div>
    )
}
