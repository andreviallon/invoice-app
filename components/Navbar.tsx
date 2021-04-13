import Image from 'next/image';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeEnum } from 'models/Theme';
import { useTheme } from 'next-themes';

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const navbarStyles = `
        bg-gray
        w-full
        h-16
        flex
        flex-row
        justify-between
        w-24
      
        sm:flex-col
        sm:items-center
        sm:h-screen

        dark:bg-primary-dark
    `;

    const iconStyles = `text-secondary-dark text-xl hover:text-secondary-light`;

    return (
        <div className={`${navbarStyles} navbar`}>
            <div className="cursor-pointer w-16 sm:w-full">
                <div className="hidden sm:block">
                    <Image src="/logo_with_background.svg" alt="Logo" layout="fixed" width={85} height={85} />
                </div>
                <div className="block sm:hidden">
                    <Image src="/logo_with_background.svg" alt="Logo" layout="fixed" width={64} height={64} />
                </div>
            </div>
            <div className="flex justify-end items-center w-full sm:flex-col flex-row pb-0 pr-4 sm:pb-4 sm:pr-0">
                <div className="cursor-pointer p-6">
                    {theme === ThemeEnum.LIGHT ?
                        <button onClick={() => setTheme(`${ThemeEnum.DARK}`)}>
                            <FontAwesomeIcon className={iconStyles} icon={faSun} />
                        </button>
                        :
                        <button onClick={() => setTheme(`${ThemeEnum.LIGHT}`)}>
                            <FontAwesomeIcon className={iconStyles} icon={faMoon} />
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