import LogoutButton from "./LogoutButton"

function SideNav() {

  return (
    <nav className='h-full w-[300px] border-r border-secondary flex flex-col items-center justify-between p-4'>
        <b>F:lez:lla</b>

        <div className='flex flex-col items-center justify-center gap-2'>

        </div>

        <LogoutButton />
    </nav>
  )
}

export default SideNav