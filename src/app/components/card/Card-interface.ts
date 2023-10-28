export interface CardGroupProps {}

export interface CityMetaProps {
    city: string
    icon: string
    weatherCondition: string
}
export interface CardProps {
    onDelete: () => void
    cityData: CityMetaProps
}
