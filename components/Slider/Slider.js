import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Slider.module.scss";
import { Navigation } from "swiper";
import "swiper/css/navigation";

function Slider({ songsList, slides: Slides }) {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        className="slider-swiper"
        navigation={false}
        modules={[Navigation]}
      >
        {songsList.map(({ songName, artistName }, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Slides songName={songName} artistName={artistName} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
