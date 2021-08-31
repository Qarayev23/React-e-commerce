import React, { useContext, useEffect, useRef } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext'

const Navbar = () => {

    const { cart } = useContext(cartContext)
    const totalQuantity = cart.reduce((acc, element) => {
        return acc + element.count
    }, 0)

    const navOpen = useRef(null)
    const navClose = useRef(null)
    const basketIcon = useRef(null)
    const menu = useRef(null)

    useEffect(() => {
        navOpen.current.addEventListener("click", () => {
            menu.current.classList.add("open");
            document.body.classList.add("active");
        });

        const closeFunk = () => {
            menu.current.classList.remove("open");
            document.body.classList.remove("active");
        }

        navClose.current.addEventListener("click", () => {
            closeFunk()
        });

        basketIcon.current.addEventListener("click", () => {
            closeFunk()
            window.scrollTo(0, 0)
        });

        document.querySelectorAll(".nav-link").forEach(item => item.onclick = () => closeFunk())
    }, [])


    window.addEventListener("scroll", () => {
        const navBar = document.querySelector(".navigation");
        const scrollHeight = window.pageYOffset;
        const navHeight = navBar.getBoundingClientRect().height;

        if (scrollHeight > navHeight) {
            navBar.classList.add("fix-nav");
        } else {
            navBar.classList.remove("fix-nav");
        }
    });

    return (
        <div className="navigation">
            <div className="container">
                <nav className="nav">
                    <div className="nav-hamburger" ref={navOpen}>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="nav-logo">
                        <Link to="/" className="scroll-link">
                            PHONE
                        </Link>
                    </div>

                    <div className="nav-menu" ref={menu}>
                        <div className="menu-top">
                            <span className="nav-category">PHONE</span>
                            <button href="#" className="close-toggle" ref={navClose}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <HashLink to="/#header" className="nav-link scroll-link">Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/#category" className="nav-link scroll-link">Category</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/#news" className="nav-link scroll-link">News</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/#contact" className="nav-link scroll-link">Contact</HashLink>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-icons">
                        <a href="#" className="icon-item">
                            <i className="fas fa-user-alt"></i>
                        </a>
                        <a href="#" className="icon-item">
                            <i className="fas fa-search"></i>
                        </a>
                        <Link to="/cart" className="icon-item" ref={basketIcon}>
                            <i className="fas fa-shopping-basket"></i>
                            <span id="cart-total">{totalQuantity}</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
