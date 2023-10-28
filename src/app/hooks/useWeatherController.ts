import { LOCAL_STORE_PATH } from '@/config'
import { capitalize } from '@/utils/capitalizeString'
import { toast } from 'react-toastify'

export interface LocalDBProps {
    citiesToShow?: string[]
    favorites?: string[]
    notes?: {
        city: string
        note: string
    }[]
}

const useWeatherService = () => {
    const setLocalDB = (value: LocalDBProps) => {
        localStorage.setItem(LOCAL_STORE_PATH, JSON.stringify(value))
    }
    const getLocalDB = (): LocalDBProps | null => {
        const weatherLensStore = localStorage.getItem(LOCAL_STORE_PATH)

        return weatherLensStore ? JSON.parse(weatherLensStore) : null
    }

    const addOrRemoveFromFavList = (city: string) => {
        city = capitalize(city)

        const local_DB = getLocalDB()
        let updatedFavList: string[] = []

        try {
            if (local_DB) {
                const { favorites } = local_DB

                if (favorites) {
                    const action = favorites?.includes(city) ? 'remove' : 'add'

                    if (action.toLowerCase() === 'remove') {
                        updatedFavList = favorites?.filter(
                            (fav_item) => fav_item !== city
                        ) as string[]
                        toast.success(`${city} has been removed to Favorites`)
                    } else if (action.toLowerCase() === 'remove') {
                        updatedFavList = [...(favorites as string[]), city]
                        toast.success(`${city} has been added to Favorites`)
                    }

                    const updated_Local_DB = {
                        ...local_DB,
                        favorites: updatedFavList.sort(),
                    }

                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        ...local_DB,
                        favorites: updatedFavList.sort(),
                    }

                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    favorites: updatedFavList.sort(),
                }

                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addOrRemoveFromCitiesToShow = (city: string) => {
        city = capitalize(city)

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
                            `${city} has been removed to your city list`
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

                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        ...local_DB,
                        citiesToShow: updatedCitiesToShow.sort(),
                    }

                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    citiesToShow: updatedCitiesToShow.sort(),
                }

                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateNote = (city: string, note: string) => {
        city = capitalize(city)

        const local_DB = getLocalDB()

        let updated_Note: {
            city: string
            note: string
        }[] = []

        try {
            if (local_DB) {
                const { notes } = local_DB

                if (notes) {
                    updated_Note = notes.map((_note) =>
                        _note.city === city ? { ..._note, note } : _note
                    )

                    const updated_Local_DB = {
                        ...local_DB,
                        notes: updated_Note,
                    }

                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        ...local_DB,
                        notes: updated_Note,
                    }

                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    notes: updated_Note,
                }
                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addNote = (city: string, note: string) => {
        city = capitalize(city)

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

                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        ...local_DB,
                        notes: updated_Note,
                    }

                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    notes: updated_Note,
                }
                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteNote = (city: string, note: string) => {
        city = capitalize(city)

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

                    setLocalDB(updated_Local_DB)
                } else {
                    const updated_Local_DB = {
                        ...local_DB,
                        notes: updated_Note,
                    }

                    setLocalDB(updated_Local_DB)
                }
            } else {
                const updated_Local_DB = {
                    notes: updated_Note,
                }
                setLocalDB(updated_Local_DB)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        setLocalDB,
        getLocalDB,
        addOrRemoveFromFavList,
        addOrRemoveFromCitiesToShow,
        addNote,
        updateNote,
        deleteNote,
    }
}

export default useWeatherService
