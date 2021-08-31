import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

const sliderConfiguration = {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
};

const Hero = () => {
    const slider = new Glide('#glide_1', sliderConfiguration);

    useEffect(() => {
        slider.mount()
    }, [slider])

    return (
        <div className="hero">
            <div className="glide" id="glide_1">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <div className="hero-center">
                                <div className="hero-left">
                                    <span className="">New Inspiration 2020</span>
                                    <h1 className="">PHONES MADE FOR YOU!</h1>
                                    <p>Trending from mobile and headphone style collection</p>
                                    <a href="#"><button className="hero-btn">SHOP NOW</button></a>
                                </div>
                                <div className="hero-right">
                                    <div className="hero__img-container">
                                        <img className="banner-01" src={require("../../images/banner_01.png").default} alt="banner2" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="hero-center">
                                <div className="hero-left">
                                    <span>New Inspiration 2020</span>
                                    <h1>PHONES MADE FOR YOU!</h1>
                                    <p>Trending from mobile and headphone style collection</p>
                                    <a href="#"><button className="hero-btn">SHOP NOW</button></a>
                                </div>
                                <div className="hero-right">
                                    <img className="banner-02" src={require("../../images/banner_02.png").default} alt="banner2" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    <button className="glide__bullet" data-glide-dir="=0"></button>
                    <button className="glide__bullet" data-glide-dir="=1"></button>
                </div>

                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
