import React, { useEffect, useState } from 'react'
import { CityMetaProps } from '../card/Card-interface'
import useWeatherService from '@/hooks/useWeatherController'
import { AddFavButtonPropps } from './interface'
import styles from './FavoritesCarousel.module.css'

const AddFavButton: React.FC<AddFavButtonPropps> = ({ city }) => {
    const [favList, setFavList] = useState<CityMetaProps[]>([])
    const [isAddedFav, setIsAddedFav] = useState(false)
    const { getFavorites, localStoreDB, addOrRemoveFromFavList } =
        useWeatherService()

    useEffect(() => {
        getFavorites()
            ?.then((data) => {
                data && setFavList(data as CityMetaProps[])
            })
            .catch((error) => console.log('ERROR', error))
    }, [localStoreDB])

    useEffect(() => {
        if (favList.length && favList?.[0] !== undefined) {
            const isExisting = favList.find((_fav) => _fav.city === city)

            return setIsAddedFav(Boolean(isExisting))
        }
        setIsAddedFav(false)
    }, [city, favList, localStoreDB])

    return (
        <div className={styles.button_container}>
            <button
                className={styles.button}
                onClick={() => addOrRemoveFromFavList(city)}
            >
                {isAddedFav ? 'Remove from Favorites' : 'Add to Favorite'}
            </button>
        </div>
    )
}

export default AddFavButton
