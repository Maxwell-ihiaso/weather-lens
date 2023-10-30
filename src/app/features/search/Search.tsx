'use client'

import { useIcon } from '@/hooks/useIcon'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from './Search.module.css'

const Search = () => {
    const [searchParams, setSearchParams] = useState('')
    const { faMagnifyingGlass, faArrowRight, FontAwesomeIcon } = useIcon()
    const router = useRouter()

    const handleSearch = () => {
        router.prefetch(`/city/${searchParams}`)
        setSearchParams('')
    }

    return (
        <section className={styles.sarch_container}>
            <div className={styles.search_group}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.search_icon}
                />
                <input
                    type="text"
                    name="search"
                    value={searchParams}
                    placeholder="Search a city..."
                    onChange={(e) => setSearchParams(e.target.value)}
                    className={styles.search_field}
                />
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className={styles.search_button_go}
                    onClick={handleSearch}
                />
            </div>
        </section>
    )
}

export default Search
