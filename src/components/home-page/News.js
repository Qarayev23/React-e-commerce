import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'

const News = () => {
    SwiperCore.use([Autoplay]);
    return (
        <section className="section news" id="news">
            <div className="container">
                <div className="title-container">
                    <div className="section-titles">
                        <div className="section-title active">
                            <span className="dot"></span>
                            <h1 className="primary-title">Phone News</h1>
                        </div>
                    </div>
                </div>
                <div className="news-container">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        speed={700}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },

                            998: {
                                slidesPerView: 3,
                            }

                        }}
                    >
                        <SwiperSlide>
                            <div className="new-card">
                                <div className="card-header">
                                    <img src={require("../../images/news1.jpg").default} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h3>Styling White Shirts After A Cool Day</h3>
                                    <span>By Admin</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                                             provident rem sed minus natus unde vel modi!</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="new-card">
                                <div className="card-header">
                                    <img src={require("../../images/news2.jpg").default} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h3>Styling White Shirts After A Cool Day</h3>
                                    <span>By Admin</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                                             provident rem sed minus natus unde vel modi!</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="new-card">
                                <div className="card-header">
                                    <img src={require("../../images/news3.jpg").default} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h3>Styling White Shirts After A Cool Day</h3>
                                    <span>By Admin</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                                            provident rem sed minus natus unde vel modi!</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="new-card">
                                <div className="card-header">
                                    <img src={require("../../images/news4.jpg").default} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h3>Styling White Shirts After A Cool Day</h3>
                                    <span>By Admin</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                                             provident rem sed minus natus unde vel modi!</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="new-card">
                                <div className="card-header">
                                    <img src={require("../../images/news5.jpg").default} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h3>Styling White Shirts After A Cool Day</h3>
                                    <span>By Admin</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                                             provident rem sed minus natus unde vel modi!</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section >
    )
}

export default News
