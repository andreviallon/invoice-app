import Image from 'next/image';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeEnum } from '../models/Theme';
import { useTheme } from 'next-themes';
import { useLoaded } from 'customHooks/useLoaded';

const Navbar = () => {
    const loaded = useLoaded();
    const { theme, setTheme } = useTheme();

    const navbarStyles = `
        bg-gray w-full h-16 flex flex-row justify-between w-24 fixed rounded-b-2xl sm:rounded-r-2xl sm:rounded-l-none
      
        sm:flex-col sm:items-center sm:h-screen

        dark:bg-primary-dark
    `;

    const iconStyles = 'text-secondary-dark text-xl hover:text-secondary-light cursor-pointer outline-none';

    return (
        <div className={`${navbarStyles} navbar`}>
            <div className="cursor-pointer w-16 sm:w-full">
                <div className="hidden sm:block">
                    <Image src="/logo_with_background.svg" className="rounded-r-2xl" alt="Logo" layout="fixed" width={85} height={85} />
                </div>
                <div className="block sm:hidden">
                    <Image src="/logo_with_background.svg" className="rounded-b-2xl" alt="Logo" layout="fixed" width={64} height={64} />
                </div>
            </div>
            <div className="flex justify-end items-center w-full sm:flex-col flex-row pb-0 pr-4 sm:pb-4 sm:pr-0">
                <div className="m-8">
                    {loaded && theme === ThemeEnum.LIGHT ?
                        <button onClick={() => setTheme(`${ThemeEnum.DARK}`)}>
                            <FontAwesomeIcon className={iconStyles} icon={faMoon} />
                        </button>
                        :
                        <button onClick={() => setTheme(`${ThemeEnum.LIGHT}`)}>
                            <FontAwesomeIcon className={iconStyles} icon={faSun} />
                        </button>
                    }
                    </div>
                <div className="hidden sm:block">
                    <Image src="/avatar.png" alt="Avatar" layout="fixed" width={56} height={56} />
                </div>
                <div className="block sm:hidden">
                    <Image src="/avatar.png" alt="Avatar" layout="fixed" width={45} height={45} />
                </div>
            </div>
        </div>
    )
}

export default Navbar