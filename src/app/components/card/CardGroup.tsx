'use client'

import React, { useEffect, useState } from 'react'
import { CardGroupProps, CityMetaProps } from './Card-interface'
import styles from './Card.module.css'
import HorizontalCard from './HorizontalCard'
import useWeatherService from '@/hooks/useWeatherController'
import VerticalCard from './VerticalCard'
import { useRouter } from 'next/navigation'
import Search from '@/features/search/Search'
import FavoritesCarousel from '../favorites/FavoritesCarousel'

/**
 * This element is used to display a single or multiple card element
 */

const CardGroup: React.FC<CardGroupProps> = () => {
    const [citiesMeta, setCitiesMeta] = useState<CityMetaProps[]>([])
    const [favList, setFavList] = useState<CityMetaProps[]>([])

    const router = useRouter()

    const {
        getDefaultWeatherDetails,
        addOrRemoveFromCitiesToShow,
        localStoreDB,
        getFavorites,
    } = useWeatherService()

    useEffect(() => {
        getDefaultWeatherDetails()
            ?.then((data) => {
                setCitiesMeta(data as CityMetaProps[])
            })
            .catch((error) => console.log('ERROR', error))

        getFavorites()
            ?.then((data) => {
                data && setFavList(data as CityMetaProps[])
            })
            .catch((error) => console.log('ERROR', error))
    }, [localStoreDB])

    console.log('FAVLIST', favList)

    return (
        <>
            <Search />

            <div style={{ width: '90vw', maxWidth: '600px' }}>
                {citiesMeta?.slice(0, 1).map((cities_meta, idx) => (
                    <React.Fragment key={cities_meta?.city}>
                        <VerticalCard
                            key={cities_meta?.city}
                            onDelete={() =>
                                addOrRemoveFromCitiesToShow(cities_meta?.city)
                            }
                            cityData={cities_meta}
                        />
                    </React.Fragment>
                ))}
            </div>
            {/* {favList.length && favList?.[0] !== undefined ? (
                <FavoritesCarousel favList={favList} />
            ) : null} */}
            <section className={styles.section}>
                {citiesMeta?.map((cities_meta, idx) => (
                    <React.Fragment key={cities_meta?.city}>
                        <HorizontalCard
                            key={cities_meta?.city}
                            onDelete={() =>
                                addOrRemoveFromCitiesToShow(cities_meta?.city)
                            }
                            onClick={() =>
                                router.push(`/city/${cities_meta?.city}`)
                            }
                            cityData={cities_meta}
                        />
                    </React.Fragment>
                ))}
            </section>
        </>
    )
}

export default CardGroup
