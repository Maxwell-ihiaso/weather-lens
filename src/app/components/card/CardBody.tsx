import React from 'react'
import { CardProps } from './Card-interface'
import styles from './Card.module.css'
import { useIcon } from '@/hooks/useIcon'
/**
 * This element is used to display a single or multiple card element
 */

const CardBody: React.FC<CardProps> = ({ cityData, onDelete }) => {
    const {
        faTemperatureThreeQuarters,
        faWind,
        FontAwesomeIcon,
        faBandage,
        faNfcDirectional,
        faCompress,
        faSnowflake,
        faDroplet,
        faUniregistry,
        faCloudversify,
        faGlobe,
        faFlag,
        faLocationDot,
        faLocationPin,
        faCircleXmark,
        faCalendar,
    } = useIcon()
    return (
        <section className={styles.detailsLayoutContainer}>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon
                            icon={faTemperatureThreeQuarters}
                        ></FontAwesomeIcon>
                    </span>
                    temp
                </p>
                <p>{cityData.weatherData?.current.temp_c}°C</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faBandage}></FontAwesomeIcon>
                    </span>
                    Feels Like
                </p>
                <p>{cityData.weatherData?.current.feelslike_c}°C</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>
                    </span>
                    wind
                </p>
                <p>{cityData.weatherData?.current.wind_mph} mph</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon
                            icon={faNfcDirectional}
                        ></FontAwesomeIcon>
                    </span>
                    wind direction
                </p>
                <p>{cityData.weatherData?.current.wind_dir}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faCompress}></FontAwesomeIcon>
                    </span>
                    Pressure
                </p>
                <p>{cityData.weatherData?.current.pressure_in} in</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>
                    </span>
                    Precipitation
                </p>
                <p>{cityData.weatherData?.current.precip_mm} mm</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>
                    </span>
                    Humidity
                </p>
                <p>{cityData.weatherData?.current.humidity}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faUniregistry}></FontAwesomeIcon>
                    </span>
                    UV
                </p>
                <p>{cityData.weatherData?.current.uv}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon
                            icon={faCloudversify}
                        ></FontAwesomeIcon>
                    </span>
                    Cloud
                </p>
                <p>{cityData.weatherData?.current.cloud}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                    </span>
                    Country
                </p>
                <p>{cityData.weatherData?.location.country}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                    </span>
                    Region
                </p>
                <p>{cityData.weatherData?.location.region}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                    Latitude
                </p>
                <p>{cityData.weatherData?.location.lat}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                    Longitude
                </p>
                <p>{cityData.weatherData?.location.lon}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </span>
                    Time Zone
                </p>
                <p>{cityData.weatherData?.location.tz_id.substring(0, 12)}</p>
            </div>
            <div className={styles.detailsLayout}>
                <p>
                    <span className={styles.weatherDetailsIcon}>
                        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                    </span>
                    Date/ Time
                </p>
                <p>{cityData.weatherData?.location.localtime}</p>
            </div>
        </section>
    )
}

export default CardBody
