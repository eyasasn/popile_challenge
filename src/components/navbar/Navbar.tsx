import logo from '../../images/logo.svg'
import SearchBar from '../../components/searchBar/SearchBar'
import { useState } from 'react'


const Navbar = () => {
    const [searchItem, setSearchItem] = useState("")
    return (
        <nav className='container flex justify-between h-14 items-center mx-auto my-4'>
            <img src={logo} alt='popile logo' />
            <div className='flex flex-1 justify-center ml-2'>
                <SearchBar
                    searchItem={searchItem}
                    setSearchItem={setSearchItem}
                />
            </div>
        </nav>
    )
}

export default Navbar