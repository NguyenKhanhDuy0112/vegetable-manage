import SwiperCore, { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay])

function AboutSlideImg() {

    const configImg = {
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            950: {
                slidesPerView: 3,
            },
        },
    }
    return (
        <article className='about__slide mt-3 mb-5 pb-4'>
            <Swiper {...configImg}>
                <SwiperSlide>
                    <img className='about__slide-img' src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/About_gallery01.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='about__slide-img' src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/About_Gallery04.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='about__slide-img' src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/About_Gallery03.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='about__slide-img' src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/About_gallery02.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='about__slide-img' src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/About_gallery01.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </article>
    );
}

export default AboutSlideImg;