import React from 'react'

const Collection = () => {
    return (
        <section id="collection" className="section collection">
            <div className="collection-container">
                <div className="collection-box">
                    <div className="img-container">
                        <img className="collection_02" src={require("../../images/collection_02.png").default} alt="" />
                    </div>
                    <div className="collection-content">
                        <div className="collection-data">
                            <span>New Colors Introduced</span>
                            <h1>HEADPHONES</h1>
                            <a href="#shop">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <div className="collection-box">
                    <div className="img-container">
                        <img className="collection_01" src={require("../../images/collection_01.png").default} alt="" />
                    </div>
                    <div className="collection-content">
                        <div className="collection-data">
                            <span>Phone Device Presets</span>
                            <h1>SMARTPHONES</h1>
                            <a href="#">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection
