import { Link } from "react-router";


export default function ErrorPage() {
    return (
        <div className="size-full flex flex-col items-center justify-center gap-8 p-2">
            <h1>Oops!</h1>
            <p>An unexpected error occurred.</p>
            <Link to={'/dashboard'} className="btn btn-primary w-full md:w-[400px]">GO HOME</Link>
        </div>
    )
}