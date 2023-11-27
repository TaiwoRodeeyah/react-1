import Socialicons from "./Socialicons";

export default function Footer() {
  return (
    <footer className='bg-[gold] flex items-center justify-between h-[20vh] px-10'>
        <p>&copy; Univelcity {new Date().getFullYear()}</p>
        <Socialicons/>
    </footer>
  )
}
