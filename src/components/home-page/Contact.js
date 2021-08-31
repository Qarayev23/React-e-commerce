import React from 'react'

const Contact = () => {
    return (
        <section className="section newsletter" id="contact">
            <div className="container">
                <div className="newsletter-content">
                    <div className="newsletter-data">
                        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                        <p>A short sentence describing what someone will receive by subscribing</p>
                    </div>
                    <form action="#">
                        <input type="email" placeholder="Enter your email address" className="newsletter-email" />
                        <a className="newsletter-link" href="#">subscribe</a>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
