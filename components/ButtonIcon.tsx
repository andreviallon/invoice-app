import { ButtonIconTypeEnum } from '../models/ButtonTypes'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    text: string;
    buttonType: ButtonIconTypeEnum;
    icon: IconProp;
    buttonClick?: () => void;
}

const ButtonIcon: React.FC<Props> = ({ text, buttonType, icon, buttonClick }) => {
    const classes = (buttonType): string => {
        let classes: string = 'flex items-center py-1 px-3 rounded-full font-bold text-xs focus:outline-none pr-4 h-12';
        
        if (buttonType === ButtonIconTypeEnum.PRIMARY) {
            classes = `${classes} text-white bg-primary-regular hover:bg-primary-light`;
        }

        if (buttonType === ButtonIconTypeEnum.SECONDARY) {
            classes = ` ${classes} text-secondary-dark bg-background hover:bg-secondary-light`;
        }

        return classes;
    }
    
    return (
        <button className={classes(buttonType)} onClick={buttonClick}>
            <span className="flex h-7 w-7 text-primary-regular p-2 mr-4 bg-white rounded-full font-bold text-sm items-center">
                <FontAwesomeIcon icon={icon} />
            </span>
            {text}
        </button>
    )
}

export default ButtonIcon