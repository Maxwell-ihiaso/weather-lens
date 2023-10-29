'use client'

import React, { useEffect, useState } from 'react'
import { CardDetailsProps, CityMetaProps } from './Card-interface'
import styles from './Card.module.css'
import useWeatherService from '@/hooks/useWeatherController'
import VerticalCard from './VerticalCard'
import CardBody from './CardBody'
import { getWeatherCondition } from '@/utils/fetchDataArr'
import Note from '@/features/note/Note'
import SlideCarousel from '../slider/SlideCarousel'

/**
 * This element is used to display a single or multiple card element
 */

const CardDetails: React.FC<CardDetailsProps> = ({ city }) => {
    const [cityMeta, setCityMeta] = useState<CityMetaProps>({} as CityMetaProps)

    const { addOrRemoveFromCitiesToShow, localStoreDB } = useWeatherService()

    useEffect(() => {
        console.log('STORAGE ALTERED')
        getWeatherCondition(city)
            ?.then((data) => {
                console.log('DATA', data)
                setCityMeta(data as CityMetaProps)
            })
            .catch((error) => console.log('ERROR', error))
    }, [localStoreDB])

    return (
        <section className={styles.details_section}>
            <React.Fragment key={cityMeta.city}>
                <VerticalCard
                    key={cityMeta?.city}
                    onDelete={() => addOrRemoveFromCitiesToShow(cityMeta?.city)}
                    cityData={cityMeta}
                />
                <div className={styles.slider_container}>
                    <SlideCarousel cityData={cityMeta} />
                </div>
                <CardBody
                    onDelete={() => addOrRemoveFromCitiesToShow(cityMeta?.city)}
                    cityData={cityMeta}
                />
                <Note city={cityMeta?.city} />
            </React.Fragment>
        </section>
    )
}

export default CardDetails
