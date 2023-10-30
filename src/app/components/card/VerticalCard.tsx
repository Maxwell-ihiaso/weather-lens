import React from 'react'
import { CardProps } from './Card-interface'
import styles from './Card.module.css'
import Image from 'next/image'
import { useIcon } from '@/hooks/useIcon'
/**
 * This element is used to display a single or multiple card element
 */

const VerticalCard: React.FC<CardProps> = ({ cityData, onDelete }) => {
    return (
        <section className={styles.card_vertical}>
            <p className={styles.weatherCity_vertical}>{cityData?.city}</p>
            <div className={styles.weatherIconContainer}>
                <Image
                    className={styles.logo}
                    src={cityData?.icon}
                    alt="weather condition icon"
                    width={90}
                    height={90}
                    priority
                />
            </div>
            <div className={styles.detailsLayout}>
                <p>Feels Like</p>
                <p>{cityData?.weatherData?.current.feelslike_c}°C</p>
            </div>
            <p className={styles.weatherCondition}>
                {cityData?.weatherCondition}
            </p>

            <button onClick={onDelete} className={styles.close}>
                x
            </button>
        </section>
    )
}

export default VerticalCard
