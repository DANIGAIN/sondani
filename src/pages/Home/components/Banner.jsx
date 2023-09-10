import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from '../../../assets/frontend/img/bg.png';
import bg1 from '../../../assets/frontend/img/bg1.jpg';
import dc2 from '../../../assets/frontend/img/dc2.png';
function Banner() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };
    return (
        <section>
            <div className="slider_slick_1">
                <Slider {...settings}>
                    <div className="item">
                        <div
                            className="slider"
                            style={{ backgroundImage: `url(${bg1})` }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="slide_content">
                                            <h1>Sandhani Best Lab In Khulna</h1>
                                            <h3>Total Health Care Solution</h3>
                                            <div className="slider_button">
                                                <a href="#" className="btn btn-lg btn_theme">
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="slider"
                            style={{ backgroundImage: `url(${bg})` }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="slide_content">
                                            <h1>Sandhani Diagnostic Center</h1>
                                            <h3>medical diagnostic center in khulna</h3>
                                            <div className="slider_button">
                                                <a href="#" className="button alt">
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="slide_content_img">
                                            <img src={dc2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>


    )
}

export default Banner;