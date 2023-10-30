'use client'

import Image from 'next/image'
import React from 'react'
import Slider, { Settings } from 'react-slick'

import styles from './FavoritesCarousel.module.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FavoritesCarouselProps } from './interface'
import useWeatherService from '@/hooks/useWeatherController'

const FavoritesCarousel: React.FC<FavoritesCarouselProps> = ({ favList }) => {
    const { addOrRemoveFromFavList } = useWeatherService()
    const settings: Settings = {
        speed: 2000,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        swipe: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 7,
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
        <div>
            <p>Favorites</p>
            <Slider {...settings} className={styles.slider_container}>
                {favList?.map((city_data) => (
                    <div key={city_data?.city} className={styles.slide_card}>
                        <p>{city_data?.city}</p>
                        <div>
                            <Image
                                className={styles.logo}
                                src={`${city_data?.icon}`}
                                alt="weather condition icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                        <p>{`${city_data?.weatherData?.current?.temp_c}°c`}</p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                addOrRemoveFromFavList(city_data?.city)
                            }}
                            className={styles.close}
                        >
                            x
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default FavoritesCarousel
