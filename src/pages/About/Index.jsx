import React from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import Footer from '../Home/components/Footer'
import '../../assets/frontend/css/swiper.min.css';
import c1 from '../../assets/frontend/img/c1.jpg';
import c3 from '../../assets/frontend/img/c3.jpeg';
import c2 from '../../assets/frontend/img/c2.webp';
import history from '../../assets/frontend/img/history.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Index() {
    return (
        <div>
            <Header />
            <Navigation />
            <div class="banner-section">
                <div class="container-fluid-p-0">
                    <div class="row">
                        <div class="col-lg-8">

                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                className="bannerSwiper swiper-zoom-container"
                                zoom={true}
                            >
                                <div className="swiper-wrapper">
                                    <SwiperSlide>

                                        <img src={c1} alt="banner" />
                                        <div class="image-overlay"></div>
                                        <div class="slide-content">  </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={c3} alt="banner" />
                                        <div class="image-overlay"></div>
                                        <div class="slide-content">  </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={c2} alt="banner" />
                                        <div class="image-overlay"></div>
                                        <div class="slide-content">  </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={history} alt="banner" />
                                        <div class="image-overlay"></div>
                                        <div class="slide-content">  </div>
                                    </SwiperSlide>
                                </div>


                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>



            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="history_section ">
                                <h2 className="title p-2">About Us</h2>
                                <p className=" p-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                                    debitis reprehenderit tempora commodi aliquam, quos mollitia?
                                    Laborum culpa tempore expedita doloremque laboriosam iusto unde,
                                    adipisci excepturi sapiente modi corporis debitis quo error
                                    repellat accusantium quos impedit recusandae fuga cum explicabo
                                    neque dolorem. At reprehenderit odio dignissimos, sit officiis ea
                                    tempore inventore ex corporis fugiat optio alias hic maxime
                                    voluptates perspiciatis, magni maiores officia quos assumenda
                                    distinctio nesciunt! Voluptates eveniet in dolor voluptatibus
                                    inventore, voluptas blanditiis officiis, molestias iure totam,
                                    obcaecati itaque rerum ex quae amet dignissimos tempore omnis
                                    impedit eum facere! Aperiam alias deserunt distinctio aspernatur
                                    beatae! Rem labore ab voluptatibus non voluptatum, iusto
                                    laboriosam excepturi eaque cumque reiciendis quaerat totam odit
                                    quo accusantium enim illum fugit? Quas, est ipsa dicta repudiandae
                                    voluptatibus necessitatibus molestias esse facilis commodi
                                    adipisci excepturi nisi magni dolore quidem fugit numquam sint
                                    asperiores consectetur accusantium eum obcaecati tempore vel,
                                    aliquam nobis! Eos dignissimos fuga odit accusamus laboriosam id
                                    exercitationem aliquid, accusantium, recusandae, laudantium ullam
                                    enim! Inventore ut, debitis deleniti odio accusamus temporibus
                                    iure, nihil voluptatibus nam dolorem aliquid voluptas provident
                                    quas molestiae nulla voluptates at consectetur laborum pariatur
                                    rerum cumque corrupti. Blanditiis totam quod voluptate consequatur
                                    officia commodi vel, autem, quidem omnis reprehenderit beatae
                                    aspernatur!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
