'use client'

import { useParams } from 'next/navigation'
import CardDetails from '../../components/card/CardDetails'

export default function Index() {
    const params = useParams()
    return <CardDetails city={params.slug[0]} />
}
