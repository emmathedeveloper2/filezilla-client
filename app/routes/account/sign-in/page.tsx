import { useState } from "react"
import type { Route } from "./+types/page"
import { Form, Link, redirect } from "react-router"
import { ArrowRightIcon } from "lucide-react"

export const clientAction = async ({ request }: Route.ActionArgs) => {

    const formData = Object.fromEntries(await request.formData())

    try {

        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/sign-in`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const { success, message } = (await res.json()) as { success: boolean, message: string }

        if (success) return redirect('/dashboard')

        return { success: false, message }
    } catch (error) {
        return { success: false, message: 'Something went wrong' }
    }
}

export default function SignInPage({ actionData }: Route.ComponentProps) {

    return (
        <div className='size-full flex flex-col items-center justify-center gap-2 p-2'>

            <Form method='POST' className='flex flex-col items-center justify-center gap-4 mt-4 w-full md:w-[400px]'>

                {
                    actionData && !actionData.success && <div className='alert alert-error'>{actionData.message}</div>
                }

                <input required name='email' type="email" placeholder="Email" className="form-input w-full p-2" />
                <input required name='password' type="password" placeholder="Password" className="form-input w-full p-2" />

                <button className='btn btn-primary w-full'>
                    SIGN IN
                    <ArrowRightIcon />
                </button>

                <span>Don't have an account? <Link to={'/account/sign-up'} className='text-primary underline'>Sign up</Link></span>
            </Form>
        </div>
    )
}