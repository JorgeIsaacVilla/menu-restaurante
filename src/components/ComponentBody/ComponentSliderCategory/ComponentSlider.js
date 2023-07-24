import React, { useRef, useState } from "react";
import "./ComponentSlider.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import image1  from "./imageComponentSliderCategory/Rectangle1.png";
import image2 from "./imageComponentSliderCategory/Rectangle2.png";
import image3 from "./imageComponentSliderCategory/Rectangle3.png";
import image4 from "./imageComponentSliderCategory/Rectangle4.png";
import image5 from "./imageComponentSliderCategory/Rectangle5.png";

import { Link } from "react-scroll";

function ComponentSlider() {

    return(
        <>
        {/*https://codesandbox.io/p/sandbox/lmvldw?file=%2Fsrc%2Fmain.jsx%3A8%2C5 */}
            <div>
                <h2 className="tittle-category">Categorías</h2>
                <div className="canva-slider">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={40}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                <SwiperSlide>
                    <div className="description-swiper">
                        <img src={image1} />
                        <Link to="menu1" smooth={true} duration={500}>
                            <h3>Pizzas</h3>
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="description-swiper">
                        <img src={image2} />
                        <h3>Hamburguesas</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="description-swiper">
                        <img src={image3} />
                        <h3>Asados</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="description-swiper">
                        <img src={image4} />
                        <h3>Bebidas</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="description-swiper">
                        <img src={image5} className="swiper-image"/>
                        <h3>Postres</h3>
                    </div>
                </SwiperSlide>
                </Swiper>
                    <div className="line"></div>
                </div>
            </div>
        </>
    )
}

export{ ComponentSlider };