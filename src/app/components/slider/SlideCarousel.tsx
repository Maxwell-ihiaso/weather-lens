import Image from 'next/image'
import React from 'react'
import Slider, { Settings } from 'react-slick'

import styles from './SliderCarousel.module.css'
import { SliderCarouselProps } from './interface'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SlideCarousel: React.FC<SliderCarouselProps> = ({ cityData }) => {
    const settings: Settings = {
        speed: 2000,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        swipe: true,
        // swipeToSlide: true,
        // pauseOnDotsHover: false,
        // pauseOnHover: false,
        // pauseOnFocus: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 7,
        // cssEase: 'linear',
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
        ],
    }

    return (
        <Slider {...settings} className={styles.slider_container}>
            {cityData?.weatherData?.forecast?.forecastday?.[0].hour.map(
                (_forecast) => (
                    <div
                        key={_forecast.time_epoch}
                        className={styles.slide_card}
                    >
                        <p>{_forecast.time.slice(11)}</p>
                        <div>
                            <Image
                                className={styles.logo}
                                src={`https:${_forecast.condition.icon}`}
                                alt="weather condition icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                        <p>{`${_forecast.temp_c}°c`}</p>
                    </div>
                )
            )}
        </Slider>
    )
}

export default SlideCarousel
