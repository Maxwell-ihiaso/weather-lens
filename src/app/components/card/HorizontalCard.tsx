import React from 'react'
import { CardProps } from './Card-interface'
import styles from './Card.module.css'
import Image from 'next/image'
import { useIcon } from '@/hooks/useIcon'
/**
 * This element is used to display a single or multiple card element
 */

const HorizontalCard: React.FC<CardProps> = ({ cityData, onDelete }) => {
    const { faFacebook, FontAwesomeIcon } = useIcon()
    return (
        <section className={styles.card}>
            <p className={styles.weatherCity}>{cityData.city}</p>
            <div className={styles.weatherIconContainer}>
                <Image
                    className={styles.logo}
                    src={cityData.icon}
                    alt="weather condition icon"
                    width={50}
                    height={50}
                    priority
                />
            </div>
            <p className={styles.weatherCondition}>
                {cityData.weatherCondition}
            </p>
            <button onClick={onDelete} className={styles.close}>
                x
            </button>
        </section>
    )
}

export default HorizontalCard
