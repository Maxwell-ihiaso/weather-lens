import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // return <Provider store={store}>{children}</Provider>
    return <>{children}</>
}
