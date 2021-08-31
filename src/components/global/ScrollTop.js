import React from 'react'

const ScrollTop = () => {

    window.addEventListener("scroll", e => {
        const gotoTop = document.querySelector(".goto-top");
        const scrollHeight = window.pageYOffset;
        if (scrollHeight > 300) {
            gotoTop.classList.add("show-top");
        } else {
            gotoTop.classList.remove("show-top");
        }
    });

    return (
        <a href="#header" className="goto-top">
            <i className="fas fa-arrow-up"></i>
        </a>
    )
}

export default ScrollTop
