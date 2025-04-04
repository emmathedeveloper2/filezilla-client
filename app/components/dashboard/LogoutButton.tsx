import { LogOutIcon } from 'lucide-react'
import { useNavigate } from 'react-router'

const LogoutButton = () => {

  const navigate = useNavigate()

  const handleLogout = async () => {
      try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/log-out` , { credentials: 'include' })
          const { success , message } = (await res.json()) as { success: boolean, message: string }

          if(success) return  navigate('/account/sign-in')

          return alert(message)
      } catch (error) {
          return alert('Something went wrong')
      }
  }

  return (
    <button onClick={handleLogout} className='btn btn-primary w-full'>
      LOGOUT
      <LogOutIcon />
    </button>
  )
}

export default LogoutButton