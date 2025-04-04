import { LoaderIcon } from "lucide-react";



export default function LoadingScreen() {
    return (
        <div className='size-full fixed top-0 left-0 flex flex-col items-center justify-center bg-white dark:bg-black z-50'>
            <LoaderIcon className="animate-spin" />
        </div>
    )
}