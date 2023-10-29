import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // return <Provider store={store}>{children}</Provider>
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}
