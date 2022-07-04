import SwiperCore, { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import Star from '../../../../shared/components/Star/Star';

SwiperCore.use([Autoplay])

const config = {
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    loop: true
}

function AboutReviewer() {


    return (
        <article className="about__reviewer">
            <div className="about__reviewer-background-left d-lg-block d-none" style={{ backgroundImage: "url(https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h4_img2.png)" }}></div>
            <div className="about__reviewer-background-right d-lg-block d-none" style={{ backgroundImage: "url(https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h4_img3.png)" }}></div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6 col-12'>
                    <Swiper {...config}>
                        <SwiperSlide className='d-flex justify-content-center'>
                            <div className='about__reviewer-card'>
                                <div className='d-flex justify-content-center mb-4'>
                                    <img className='about__reviewer-card-img' alt="" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h3_image5.png" />
                                </div>
                                <p className='about__reviewer-card-des text-center'>
                                    “Also Like the fact that I can pick my staples in the brown paper packs and glass containers at the zero waste section, with an idea to reduce plastic and also more convenient.”
                                </p>
                                <p className='text-center'><Star value={5} /></p>
                                <p className="about__reviewer-card-name text-center">
                                    Sara - <span className='about__reviewer-card-store text-center'>Cunningham Store</span>
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='d-flex justify-content-center'>
                            <div className='about__reviewer-card'>
                                <div className='d-flex justify-content-center mb-4'>
                                    <img className='about__reviewer-card-img' alt="" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h3_image6.png" />
                                </div>
                                <p className='about__reviewer-card-des text-center'>
                                    “Also Like the fact that I can pick my staples in the brown paper packs and glass containers at the zero waste section, with an idea to reduce plastic and also more convenient.”
                                </p>
                                <p className='text-center'><Star value={5} /></p>
                                <p className="about__reviewer-card-name text-center">
                                    Sara - <span className='about__reviewer-card-store text-center'>Cunningham Store</span>
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </article>
    );
}

export default AboutReviewer;