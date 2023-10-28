'use client'

import React, { useEffect, useState } from 'react'
import { CardGroupProps, CityMetaProps } from './Card-interface'
import styles from './Card.module.css'
import HorizontalCard from './HorizontalCard'
import { LOCAL_STORE_PATH, WEATHER_API_BASE_URL, WEATHER_API_KEY } from '@/config'
import { AxiosPrivate } from '@/hooks/api'
import { WeatherForecastAPiResponseProps } from '@/interfaces/weatherapi-interface'

/**
 * This element is used to display a single or multiple card element
 */

const CardGroup: React.FC<CardGroupProps> = () => {
    const [citiesMeta, setCitiesMeta] = useState<CityMetaProps[]>([])

    const handleDelete = (idx: number) => {
        setCitiesMeta((prev) => prev.toSpliced(idx, 1))
    }

    
    useEffect(() => {
        const getWeatherCondition = async () => {
            const { data: weatherData } =
                await AxiosPrivate.get<WeatherForecastAPiResponseProps>(
                    `/forecast.json?key=${WEATHER_API_KEY}&q=ikeja&days=1&aqi=no&alerts=no`
                )
            setCitiesMeta([
                {
                    city: weatherData.location.name,
                    icon: 'https:' + weatherData.current.condition.icon,
                    weatherCondition: weatherData?.current?.condition.text,
                },
                {
                    city: weatherData.location.name,
                    icon: 'https:' + weatherData.current.condition.icon,
                    weatherCondition: weatherData?.current?.condition.text,
                },
                {
                    city: weatherData.location.name,
                    icon: 'https:' + weatherData.current.condition.icon,
                    weatherCondition: weatherData?.current?.condition.text,
                },
            ])
        }

        getWeatherCondition()
    }, [])


    useEffect(() => {
        const syncInitalList =  () => {
            const largestCitiesFromStore =
                localStorage.getItem(LOCAL_STORE_PATH)
           
        }

    }, [localStorage])
    return (
        <section className={styles.section}>
            {citiesMeta?.map((cities_meta, idx) => (
                <HorizontalCard
                    key={cities_meta.city}
                    onDelete={() => handleDelete(idx)}
                    cityData={cities_meta}
                />
            ))}
        </section>
    )
}

export default CardGroup
