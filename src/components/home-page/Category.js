import React, { useContext, useState } from 'react'
import { data } from '../../data'
import { cartContext } from '../../context/cartContext'

const Category = () => {
    const { dispatch } = useContext(cartContext)

    const [toggleState, setToggleState] = useState("All Products")

    const toggleTab = (name) => {
        setToggleState(name)
    }

    return (
        <section className="category-section section" id="category">
            <div className="tab-list">
                <div className="title-container tabs">
                    <div className="section-titles category-titles ">
                        <div className={`section-title ${toggleState === "All Products" && "active"}`}
                            onClick={() => toggleTab("All Products")}>
                            <span className="dot"></span>
                            <h1 className="primary-title">All Products</h1>
                        </div>
                    </div>
                    <div className="section-titles">
                        <div className={`section-title ${toggleState === "Trending Products" && "active"}`}
                            onClick={() => toggleTab("Trending Products")}>
                            <span className="dot"></span>
                            <h1 className="primary-title">Trending Products</h1>
                        </div>
                    </div>

                    <div className="section-titles">
                        <div className={`section-title ${toggleState === "Special Products" && "active"}`}
                            onClick={() => toggleTab("Special Products")}>
                            <span className="dot"></span>
                            <h1 className="primary-title">Special Products</h1>
                        </div>
                    </div>

                    <div className="section-titles">
                        <div className={`section-title ${toggleState === "Featured Products" && "active"}`}
                            onClick={() => toggleTab("Featured Products")}>
                            <span className="dot"></span>
                            <h1 className="primary-title">Featured Products</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="category-container">
                <div className="category-center">
                    {
                        data.map((item) => {
                            const { id, price, title, image, category } = item
                            const content = (
                                <div key={id} className="product category-products">
                                    <div className="product-header">
                                        <img src={image} alt="product" />
                                    </div>
                                    <div className="product-footer">
                                        <h3>{title}</h3>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <div className="product-price">
                                            <h4>{price}$</h4>
                                        </div>
                                        <button type="submit" className="product-btn"
                                            onClick={() => dispatch({ type: "ADD_TO_CART", item })}
                                        >Add To Cart</button>
                                    </div>
                                    <ul>
                                        <li>
                                            <a data-tip="Quick View" data-place="left" href="#">
                                                <i className="far fa-eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-tip="Add To Wishlist" data-place="left" href="#">
                                                <i className="far fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-tip="Add To Compare" data-place="left" href="#">
                                                <i className="fas fa-undo-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )

                            if (category === toggleState) return content
                            if (toggleState === "All Products") return content
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Category
