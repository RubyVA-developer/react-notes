import { FormEvent, useState } from 'react'
import { MyModal } from '@/UI/modal'
import { Link } from 'react-router-dom'
import { auth } from '@/config/firebase.ts'
import { createUserWithEmailAndPassword } from 'firebase/auth'

interface Props {
  onClose: () => void
  isOpen: boolean
}
export const LoginModalForm = ({ isOpen, onClose }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <MyModal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full p-8 space-y-6 bg-white rounded-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </MyModal>
  )
}
