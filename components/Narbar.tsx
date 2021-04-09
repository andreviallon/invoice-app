import logo from '../public/logo_with_background.svg';
import avatar from '../public/avatar.png';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeEnum } from '../models/Theme';

interface Props {
    theme: ThemeEnum
}

const Narbar:React.FC<Props> = ({ theme }) => {
    const narbarStyles = `
        bg-gray
        w-full
        h-16
        flex
        flex-row
        justify-between
        rounded-2xl
        rounded-t-none

        sm:flex-col
        sm:items-center
        sm:h-screen
        sm:w-24
        sm:rounded-l-none
        sm:rounded-t-2xl
    `;

    const iconStyles = `text-secondary-dark text-xl hover:text-secondary-light`;

    return (
        <div className={narbarStyles}>
            <img className="cursor-pointer rounded-2xl rounded-l-none w-16 sm:w-full" src={logo} alt="logo" />
            <div className="flex justify-end items-center w-full sm:flex-col flex-row pb-0 pr-4 sm:pb-4 sm:pr-0">
                <div className="cursor-pointer p-6">
                    {theme === ThemeEnum.LIGHT ? <FontAwesomeIcon className={iconStyles} icon={faMoon} /> : <FontAwesomeIcon className={iconStyles} icon={faSun} />}
                </div>
                <img className=" w-10 h-10 sm:w-12 sm:h-12" src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default Narbar
