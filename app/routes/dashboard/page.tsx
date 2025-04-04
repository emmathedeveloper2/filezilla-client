import type { CustomResponse, User } from "app/lib/types"
import type { Route } from "./+types/page"
import { redirect } from "react-router"
import { Input } from "@headlessui/react"

export const clientLoader = async () => {
    
  try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/user` , { credentials: 'include' })

      const { success , data } = (await res.json()) as CustomResponse<{ user: User }>

      if(!success || !data.user) return redirect('/account/sign-in')
      
      return data
  } catch (error) {
      return redirect('/error')
  }
}

export default function DashboardPage({ loaderData: { user } } : Route.ComponentProps) {

  return (
    <div className="size-full flex flex-col items-center justify-evenly gap-2 p-2">



        <h1>Welcome {user.username}</h1>

        <Input className='w-full md:w-[600px] form-input p-4' placeholder='Search For Files' />
    </div>
  )
}