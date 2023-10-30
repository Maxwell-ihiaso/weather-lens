import React from 'react'
import { CardProps } from './Card-interface'
import styles from './Card.module.css'
import Image from 'next/image'
/**
 * This element is used to display a single or multiple card element
 */

const HorizontalCard: React.FC<CardProps> = ({
    cityData,
    onDelete,
    onClick,
}) => {
    return (
        <section className={styles.card} onClick={onClick}>
            <p className={styles.weatherCity}>{cityData?.city}</p>
            <div className={styles.weatherIconContainer}>
                <Image
                    className={styles.logo}
                    src={cityData?.icon}
                    alt="weather condition icon"
                    width={50}
                    height={50}
                    priority
                />
            </div>
            <p>{cityData?.weatherData.current.temp_c}°C</p>
            <p className={styles.weatherCondition}>
                {cityData?.weatherCondition}
            </p>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete()
                }}
                className={styles.close}
            >
                x
            </button>
        </section>
    )
}

export default HorizontalCard
