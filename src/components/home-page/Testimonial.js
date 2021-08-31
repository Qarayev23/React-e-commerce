import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper'

const Testimonial = () => {
    SwiperCore.use([Pagination, Autoplay]);

    return (
        <section className="section testimonial" id="testimonial">
            <div className="testimonial-container">
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src={require("../../images/profile1.jpg").default} alt="profile" />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                            quibusdam consequatur eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae fuga hic nesciunt tempore
                                    quibusdam consequatur eligendi unde officia ex quae.</p>
                            <div className="client-info">
                                <h3>John Smith</h3>
                                <span>Founder at Apple</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src={require("../../images/profile2.jpg").default} alt="profile" />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                            quibusdam consequatur
                            eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic
                            nesciunt tempore
                            quibusdam consequatur eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                            nesciunt tempore
                                    quibusdam consequatur eligendi unde officia ex quae.</p>
                            <div className="client-info">
                                <h3>John Smith</h3>
                                <span>Founder at Apple</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src={require("../../images/profile3.jpg").default} alt="profile" />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                            quibusdam consequatur
                            eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic
                            nesciunt tempore
                            quibusdam consequatur eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                            nesciunt tempore
                                    quibusdam consequatur eligendi unde officia ex quae.</p>
                            <div className="client-info">
                                <h3>John Smith</h3>
                                <span>Founder at Apple</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src={require("../../images/profile4.jpg").default} alt="" />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                            quibusdam consequatur
                            eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                            nesciunt tempore
                            quibusdam consequatur eligendi unde officia ex quae.
                            hic
                            nesciunt tempore
                                    quibusdam consequatur eligendi unde officia ex quae.</p>
                            <div className="client-info">
                                <h3>John Smith</h3>
                                <span>Founder at Apple</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial
