import { Button, Navbar, NavbarToggle, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import './Header.css'

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Link
                to='/'
                className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
            >
                <span className='px-2 py-1 bg-gradient-to-r from-green-600 via-green-500 to-blue-300 rounded-lg text-white'>
                    Harshith's
                </span>
                Store
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-6 md:order-2'>
                <Link to='/sign-in'>
                    <Button gradientDuoTone='greenToBlue' outline>
                        Sign In
                    </Button>
                </Link>
                <NavbarToggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to='/'>
                        <p className='ok'>Home</p>
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to='/about'>
                        <p className='ok'>About</p>
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/shop'} as={'div'}>
                    <Link to='/shop'>
                        <p className='ok'>Shop</p>
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
