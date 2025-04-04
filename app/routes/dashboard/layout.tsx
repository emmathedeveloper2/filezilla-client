import { Outlet, redirect } from "react-router";
import type { Route } from "./+types/page";
import type { CustomResponse, User } from "app/lib/types";
import SideNav from "@components/dashboard/SideNav";

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

export default function DashboardLayout({  }: Route.ComponentProps) {

    return (
        <div className='size-full flex items-center justify-center'>
            <SideNav />
            <Outlet />
        </div>
    )
}