import { WeatherForecastAPiResponseProps } from '@/interfaces/weatherapi-interface'

export interface CardGroupProps {
   
}
export interface CardDetailsProps {
    city: string
}

export interface CityMetaProps {
    city: string
    icon: string
    weatherCondition: string
    weatherData: WeatherForecastAPiResponseProps
}
export interface CardProps {
    onDelete: () => void
    onClick?: () => void
    cityData: CityMetaProps
}
