import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

// Use throughout your app instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
