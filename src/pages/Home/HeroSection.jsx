import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section-slides">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='hero--section-slide slide-one'>
                        <div className="slide--content container">
                            <div className="slide--content-title">
                                <h1>*Приветственное сообщение</h1>
                                <br />
                                <p>*Краткое описание деятельности "TEXNOGARANT"</p>
                            </div>
                            <div className="slide--content-sub">
                                <button>CTA Button</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hero--section-slide slide-two'>
                        <div className="slide--content container">
                            <div className="slide--content-title">
                                <h1>*Приветственное сообщение</h1>
                                <br />
                                <p>*Краткое описание деятельности "TEXNOGARANT"</p>
                            </div>
                            <div className="slide--content-sub">
                                <button>CTA Button</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hero--section-slide slide-three'>
                        <div className="slide--content container">
                            <div className="slide--content-title">
                                <h1>*Приветственное сообщение</h1>
                                <br />
                                <p>*Краткое описание деятельности "TEXNOGARANT"</p>
                            </div>
                            <div className="slide--content-sub">
                                <button>CTA Button</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
