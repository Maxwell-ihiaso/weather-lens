// import { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosPrivate } from './api'

/**
 * Fetches data from the specified URL using Axios and returns the response.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to fetch data from.
 * @returns {{ data: T | undefined, error: any, isLoading: boolean, isError: boolelan }} - An object containing the response data, error, and loading state.
 */
export function useFetch<T>(
    url: string,
    options?: { [key: string]: any }
): {
    data: T | undefined
    error: any
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    refetch: () => void
    isFetching: boolean
} {
    /**
     * Fetches data from the specified URL using Axios.
     *
     * @returns {Promise<AxiosResponse<T>>} - A promise that resolves to the Axios response.
     */
    const fetchData = async (): Promise<T> => {
        const response: AxiosResponse<T> = await AxiosPrivate.get<T>(url, {
            ...options,
        })
        return response.data
    }

    // const { data, error, isLoading } = useQuery<T>(url, fetchData)
    const { data, error, isError, isLoading, isSuccess, refetch, isFetching } =
        useQuery<T>({
            queryKey: [url],
            queryFn: fetchData,
            // refetchInterval: 300000,
            // refetchOnWindowFocus: false,
        })

    return { data, error, isLoading, isError, isSuccess, refetch, isFetching }
}

/**
 * USAGE
 */

// import { useFetch } from './useFetch'
// import { useSelector } from 'react-redux'

// interface MyData {
// 	// Define the shape of your data object
// 	// Replace this with your actual data structure
// 	id: number
// 	name: string
// 	// ...
// }

// function MyComponent() {
// 	const data = useSelector((state) => state.data) as MyData // Access the data from Redux state
// 	const { error, isLoading } = useFetch<MyData>('https://api.example.com/data')

// 	// Rest of the component code
// }
