import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TestimonialsCard from "../testimonialsCard/TestimonialsCard";
import womanImg from "../../static/images/woman@3x.png";
import panRoman from "../../static/images/panRoman@1x.png";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";

function SwiperComponent() {
  return (
    <Swiper
      modules={[Navigation]}
      effect="coverflow"
      slidesPerView="auto"
      spaceBetween={"175px"}
      navigation={{ nextEl: ".swiper-button-next" }}
    >
      <SwiperSlide style={{ maxWidth: "1252px" }}>
        {({ isNext }) => (
          <TestimonialsCard
            text={
              "Porttitor mattis congue gravida consectetur duis euismod imperdiet. Nunc eu amet, adipiscing amet tincidunt mi lectus ut. Habitant nullam ut auctor."
            }
            image={womanImg}
            signature={"\u002d Luna, Luna\u0027s Asethetics"}
            active={isNext}
          />
        )}
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative", maxWidth: "1252px" }}>
        {({ isNext }) => (
          <TestimonialsCard
            text={
              "At semper elementum sapien amet. Orci imperdiet habitant purus sit aliquet in. Tortor mauris morbi eget lobortis cras malesuada. Non fringilla vulputate sed"
            }
            image={panRoman}
            signature={"\u002d Pan Roman, Chloé Asethetics"}
            active={isNext}
          />
        )}
      </SwiperSlide>
      <SwiperSlide style={{ maxWidth: "1252px" }}>
        {({ isNext }) => (
          <TestimonialsCard
            text={
              "Porttitor mattis congue gravida consectetur duis euismod imperdiet. Nunc eu amet, adipiscing amet tincidunt mi lectus ut. Habitant nullam ut auctor."
            }
            image={womanImg}
            signature={"\u002d Chloé, Chloé Asethetics"}
            active={isNext}
          />
        )}
      </SwiperSlide>
      <SwiperSlide style={{ maxWidth: "1252px" }}>
        {({ isNext }) => (
          <TestimonialsCard
            text={
              "At semper elementum sapien amet. Orci imperdiet habitant purus sit aliquet in. Tortor mauris morbi eget lobortis cras malesuada. Non fringilla vulputate sed"
            }
            image={panRoman}
            signature={"\u002d Pan Roman, Chloé Asethetics"}
            active={isNext}
          />
        )}
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
