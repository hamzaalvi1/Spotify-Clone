import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Slider.module.scss";
import { Navigation } from "swiper";
import "swiper/css/navigation";

function Slider({
  sliderList,
  spaces,
  slidePerView,
  loop,
  navigation,
  slides: Slides,
}) {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        spaceBetween={spaces}
        slidesPerView={slidePerView}
        loop={loop}
        className="slider-swiper"
        navigation={navigation}
        modules={[Navigation]}
      >
        {sliderList.map((slide, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Slides data={slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
