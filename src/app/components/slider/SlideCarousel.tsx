import Image from 'next/image'
import React from 'react'
import Slider, { Settings } from 'react-slick'

import styles from './SliderCarousel.module.css'
import { SliderCarouselProps } from './interface'

const SlideCarousel: React.FC<SliderCarouselProps> = ({ cityData }) => {
    const settings: Settings = {
        speed: 2000,
        autoplaySpeed: 0,
        dots: false,
        arrows: false,
        swipe: false,
        swipeToSlide: true,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        cssEase: 'linear',
        rtl: false,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 4,
        //         },
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //         },
        //     },
        //     {
        //         breakpoint: 468,
        //         settings: {
        //             slidesToShow: 2,
        //         },
        //     },
        // ],
    }

    return (
        <Slider {...settings} className={styles.slider_container}>
            {cityData?.weatherData?.forecast?.forecastday?.[0].hour.map(
                (_forecast) => (
                    <div
                        key={_forecast.time_epoch}
                        className={styles.slide_card}
                    >
                        <p className={styles.weatherCity_vertical}>
                            {_forecast.time.slice(11)}
                        </p>
                        <div className={styles.weatherIconContainer}>
                            <Image
                                className={styles.logo}
                                src={`https:${_forecast.condition.icon}`}
                                alt="weather condition icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                        <p className={styles.weatherCondition}>
                            {`${_forecast.temp_c}°c`}
                        </p>
                    </div>
                )
            )}
        </Slider>
    )
}

export default SlideCarousel
