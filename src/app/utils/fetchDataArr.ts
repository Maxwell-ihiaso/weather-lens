import { WEATHER_API_KEY } from '@/config'
import { AxiosPrivate } from '@/hooks/api'
import { WeatherForecastAPiResponseProps } from '@/interfaces/weatherapi-interface'

export const fetchDataArr = (citiesToShow: string[]) => {
    const promises = citiesToShow.map((city) => getWeatherCondition(city))

    return Promise.all(promises)
        .then((dataArray) => dataArray)
        .catch((error) => {
            console.error('Error fetching all data:', error)
            return undefined
        })
}

export const getWeatherCondition = (city: string) => {
    return AxiosPrivate.get<WeatherForecastAPiResponseProps>(
        `/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
        .then(({ data: weatherData }) => ({
            city: weatherData.location.name,
            icon: 'https:' + weatherData.current.condition.icon,
            weatherCondition: weatherData?.current?.condition.text,
            weatherData,
        }))
        .catch((error) => {
            console.error('Error fetching all data:', error)
            return undefined
        })
}
