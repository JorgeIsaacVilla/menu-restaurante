import React, { useRef, useState } from "react";
import "./Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import image1 from "./imgSliderCat/m1.png";
import image2 from "./imgSliderCat/m2.png";
import image3 from "./imgSliderCat/m3.png";
import image4 from "./imgSliderCat/m4.png";
import image5 from "./imgSliderCat/m5.png";

function Slider({ targetSection1,targetSection2, targetSection3, targetSection4, targetSection5 }) {

    const sliderITem =[

        {targetSection:targetSection1,
         imageSlider:image1,
         tittleSLider:"Pizzas"
        },

        {targetSection:targetSection2,
        imageSlider:image2,
        tittleSLider:"Hamburguesas"
        },

       {targetSection:targetSection3,
       imageSlider:image3,
       tittleSLider:"Asados"
       },

       {targetSection:targetSection4,
       imageSlider:image4,
       tittleSLider:"Bebidas"
       },

       {targetSection:targetSection5,
       imageSlider:image5,
       tittleSLider:"Postres"
       },
    ];

  return (

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
            {sliderITem.map((slider)=>
            <SwiperSlide key={slider.tittleSLider}>
                <a data-href={`#${slider.targetSection}`} 
                  onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(`#${slider.targetSection}`);
                  target.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <div className="description-swiper">
                    <img src={slider.imageSlider} />
                    <h3> {slider.tittleSLider} </h3>
                    </div>
                </a>
            </SwiperSlide>
            )}
          </Swiper>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}

export { Slider };