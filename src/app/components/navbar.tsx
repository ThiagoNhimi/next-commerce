import Link from 'next/link'


function Navbar() {
    return(
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 z-50 bg-gray-900 text-blue-300 justify-center'>
            <Link href="/" className='absolute uppercase z-1 font-lighter flex items-center text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out'>
            A sua melhor escolha
            </Link> 
            <div className='w-full flex items-center justify-between font-bold uppercase text-md h-10 m-0 '>
            <Link href="/" className=''
            >
                Next<span className='text-gray-100 '>.Store</span> 
            </Link>
            
            
            <Link href="/" className='uppercase font-bold text-md h-12 flex items-center'
            >
                login
            </Link>
            
            </div>
        </nav>
    )
}

export default Navbar