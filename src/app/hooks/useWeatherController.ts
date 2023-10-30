'use client'

import {
    GOOGLE_API_KEY,
    GOOGLE_GEOCODING_URL,
    LOCAL_STORE_PATH,
} from '@/config'
import { capitalize } from '@/utils/capitalizeString'
import { toast } from 'react-toastify'
import { AxiosPrivate } from './api'
import { fetchDataArr, getWeatherCondition } from '@/utils/fetchDataArr'
import { largestCities } from '@/utils/largestCities'
import { useState } from 'react'

export interface LocalDBProps {
    citiesToShow?: string[]
    favorites?: string[]
    notes?: {
        city: string
        note: string
    }[]
}

const useWeatherService = () => {
    const [localStoreDB, setLocalStoreDB] = useState<LocalDBProps>(
        {} as LocalDBProps
    )
    const setLocalDB = (value: LocalDBProps) => {
        localStorage.setItem(LOCAL_STORE_PATH, JSON.stringify(value))
    }
    const getLocalDB = (): LocalDBProps | null => {
        const weatherLensStore = localStorage.getItem(LOCAL_STORE_PATH)

        return weatherLensStore ? JSON.parse(weatherLensStore) : null
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords
                        // You can use the latitude and longitude to get the city using a reverse geocoding service.
                        // For simplicity, let's just display them for now.
                        resolve({ latitude, longitude })
                    },
                    (error) => {
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                toast.info(
                                    `You have denied Weather Lens permission to get your city's weather details by your location`
                                )
                                reject(error)

                                break
                            case error.POSITION_UNAVAILABLE:
                                toast.info(
                                    'Location information is unavailable.'
                                )
                                reject(error)

                                break
                            case error.TIMEOUT:
                                toast.error(
                                    'The request to get user location timed out.'
                                )
                                reject(error)

                                break
                            default:
                                toast.error('Oops! An error occurred.')
                                reject(error)
                        }
                    }
                )
            })
        } else {
            toast.info('Geolocation is not supported by this browser.')
        }
    }

    // const getWeatherUpdateFromLocation = async (address: string) => {
    //     console.log('RETRIEVING DATA COORDINATES')
    //     const { latitude, longitude } = await getLocation()

    //     try {
    //         const response = await AxiosPrivate.get(
    //             GOOGLE_GEOCODING_URL as string,
    //             {
    //                 params: {
    //                     latlng: `${latitude}, ${longitude}`,
    //                     key: GOOGLE_API_KEY,
    //                 },
    //             }
    //         )

    //         const { results } = response.data

    //         if (results.length > 0) {
    //             const addressComponent = results[0].address_components

    //             return getWeatherCondition(
    //                 addressComponent?.[0]?.long_name
    //             ).then((weather_data) => weather_data)
    //         } else {
    //             console.error('No results found for your location.')
    //             return null
    //         }
    //     } catch (error) {
    //         console.error('Error geocoding address:', error)
    //         return null
    //     }
    // }

    const addOrRemoveFromFavList = (city: string) => {
        const local_DB = getLocalDB()

        let updatedFavList: string[] = []

        try {
            if (local_DB) {
                const { favorites } = local_DB

                if (favorites) {
                    if (favorites.length === 0) {
                        const updated_Local_DB = {
                            ...local_DB,
                            favorites: [city],
                        }

                        setLocalStoreDB(updated_Local_DB)
                        setLocalDB(updated_Local_DB)

                        return
                    }
                    const action = favorites?.includes(city) ? 'remove' : 'add'

                    if (action.toLowerCase() === 'remove') {
                        updatedFavList = favorites?.filter(
                            (fav_item) => fav_item !== city
                        ) as string[]
                        toast.success(`${city} has been removed from Favorites`)
                    } else if (action.toLowerCase() === 'remove') {
                        updatedFavList = [...(favorites as string[]), city]
                        toast.success(`${city} has been added to Favorites`)
                    }

                    const updated_Local_DB = {
                        ...local_DB,
                        favorites: updatedFavList.sort(),
                    }

                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        ...local_DB,
                        favorites: [city],
                    }

                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    favorites: [city],
                }

                setLocalStoreDB(updated_Local_DB)
                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addOrRemoveFromCitiesToShow = (city: string) => {
        const local_DB = getLocalDB()
        let updatedCitiesToShow: string[] = []

        try {
            if (local_DB) {
                const { citiesToShow } = local_DB

                if (citiesToShow) {
                    const action = citiesToShow?.includes(city)
                        ? 'remove'
                        : 'add'

                    if (action.toLowerCase() === 'remove') {
                        updatedCitiesToShow = citiesToShow?.filter(
                            (fav_item) => fav_item !== city
                        ) as string[]
                        toast.success(
                            `${city} has been removed from your city list`
                        )
                    } else if (action.toLowerCase() === 'remove') {
                        updatedCitiesToShow = [
                            ...(citiesToShow as string[]),
                            city,
                        ]
                        toast.success(
                            `${city} has been added to your city list`
                        )
                    }

                    const updated_Local_DB = {
                        ...local_DB,
                        citiesToShow: updatedCitiesToShow.sort(),
                    }

                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        ...local_DB,
                        citiesToShow: updatedCitiesToShow.sort(),
                    }

                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    citiesToShow: updatedCitiesToShow.sort(),
                }

                setLocalStoreDB(updated_Local_DB)
                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateNote = (city: string, note: string) => {
        const local_DB = getLocalDB()

        let updated_Note: {
            city: string
            note: string
        }[] = []

        try {
            if (local_DB) {
                const { notes } = local_DB

                if (notes && notes.length) {
                    updated_Note = notes.map((_note) =>
                        _note.city === city ? { ..._note, note } : _note
                    )

                    const updated_Local_DB = {
                        ...local_DB,
                        notes: updated_Note,
                    }

                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        notes: [
                            {
                                city,
                                note,
                            },
                        ],
                    }
                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    notes: [
                        {
                            city,
                            note,
                        },
                    ],
                }
                setLocalStoreDB(updated_Local_DB)
                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addNote = (city: string, note: string) => {
        const local_DB = getLocalDB()

        let updated_Note: {
            city: string
            note: string
        }[] = []

        try {
            if (local_DB) {
                const { notes } = local_DB

                if (notes) {
                    updated_Note = [...notes, { city, note }]

                    const updated_Local_DB = {
                        ...local_DB,

                        notes: updated_Note,
                    }

                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        notes: [
                            {
                                city,
                                note,
                            },
                        ],
                    }
                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    notes: [
                        {
                            city,
                            note,
                        },
                    ],
                }
                setLocalStoreDB(updated_Local_DB)
                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteNote = (city: string) => {
        // city = capitalize(city)

        const local_DB = getLocalDB()

        let updated_Note: {
            city: string
            note: string
        }[] = []

        try {
            if (local_DB) {
                const { notes } = local_DB

                if (notes) {
                    updated_Note = notes.filter((_note) => _note.city !== city)

                    const updated_Local_DB = {
                        ...local_DB,
                        notes: updated_Note,
                    }

                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getDefaultWeatherDetails = () => {
        const local_DB = getLocalDB()

        try {
            if (local_DB) {
                const { citiesToShow } = local_DB
                if (citiesToShow) {
                    return citiesToShow.length
                        ? fetchDataArr(citiesToShow)
                        : undefined
                } else {
                    const updated_Local_DB = {
                        ...local_DB,
                        citiesToShow: largestCities
                            .map((_cities) => _cities.urbanAgglomeration)
                            .sort(),
                    }

                    setLocalStoreDB(updated_Local_DB)
                    setLocalDB(updated_Local_DB)
                    return fetchDataArr(
                        largestCities
                            .map((_cities) => _cities.urbanAgglomeration)
                            .sort()
                    )
                }
            } else {
                const updated_Local_DB = {
                    citiesToShow: largestCities
                        .map((_cities) => _cities.urbanAgglomeration)
                        .sort(),
                }

                setLocalStoreDB(updated_Local_DB)
                setLocalDB(updated_Local_DB)
                return fetchDataArr(
                    largestCities
                        .map((_cities) => _cities.urbanAgglomeration)
                        .sort()
                )
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getFavorites = () => {
        const local_DB = getLocalDB()

        try {
            if (local_DB) {
                const { favorites } = local_DB

                if (favorites) {
                    return favorites.length
                        ? fetchDataArr(favorites)
                        : undefined
                }
                
                return undefined
            }
            return undefined
        } catch (error) {
            console.log(error)
        }
    }

    const getNotes = (city: string) => {
        const local_DB = getLocalDB()

        if (local_DB) {
            const { notes } = local_DB

            if (notes && notes.length) {
                return notes.find((_city) => _city.city === city)
            }

            return undefined
        }
        return undefined
    }

    return {
        localStoreDB,
        setLocalDB,
        getLocalDB,
        addOrRemoveFromFavList,
        addOrRemoveFromCitiesToShow,
        addNote,
        updateNote,
        deleteNote,
        // getWeatherUpdateFromLocation,
        getDefaultWeatherDetails,
        getNotes,
        getFavorites,
    }
}

export default useWeatherService
