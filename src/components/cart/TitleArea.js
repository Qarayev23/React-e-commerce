import React from 'react'
import { Link } from 'react-router-dom'

const TitleArea = () => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-container">
                    <ul className="page-titles">
                        <li>
                            <Link to="/">
                                <i className="fas fa-home"></i>
                            </Link>
                        </li>
                        <li className="page-title">Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TitleArea
