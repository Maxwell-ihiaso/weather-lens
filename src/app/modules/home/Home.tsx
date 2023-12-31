import React from 'react'
import styles from './Home.module.css'
import CardGroup from '@/components/card/CardGroup'
import DashboardLayout from '@/layout/DashboardLayout'
import CardDetails from '@/components/card/CardDetails'

const Home = () => {
    return (
        <DashboardLayout>
            <main className={styles.main}>
                <CardGroup />
            </main>
        </DashboardLayout>
    )
}

export default Home
