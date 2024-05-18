import HomePage from '../pages/home'
import ProfilePage from '../pages/profile'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
])

export default router
