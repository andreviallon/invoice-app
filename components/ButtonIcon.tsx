import { ButtonIconTypeEnum } from '../models/ButtonTypes';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    text: string;
    buttonType: ButtonIconTypeEnum;
    icon: IconProp;
    buttonClick?: () => void;
}

const ButtonIcon: React.FC<Props> = ({ text, buttonType, icon, buttonClick }) => {
    const classes = (buttonType: ButtonIconTypeEnum): string => {
        let classes: string = 'flex items-center py-1 px-3 rounded-full font-bold text-xs focus:outline-none pr-4 h-12 w-full justify-center';
        if (buttonType === ButtonIconTypeEnum.PRIMARY) classes = `${classes} text-white bg-primary-regular hover:bg-primary-light`;
        if (buttonType === ButtonIconTypeEnum.SECONDARY) classes = `${classes} text-secondary-dark bg-background hover:bg-secondary-light`;
        return classes;
    }

    const buttonIcon = (buttonType): string => {
        let classes = 'flex h-7 w-7 p-2 mr-4 rounded-full font-bold text-sm items-center';
        if (buttonType === ButtonIconTypeEnum.PRIMARY) classes = `${classes} text-primary-regular bg-white`;
        if (buttonType === ButtonIconTypeEnum.SECONDARY) classes = ` ${classes} bg-secondary-veryLight hover:bg-secondary-light`;
        return classes;
    }
    
    return (
        <button type="button" className={classes(buttonType)} onClick={buttonClick}>
            <span className={buttonIcon(buttonType)}>
                <FontAwesomeIcon icon={icon} />
            </span>
            {text}
        </button>
    )
}

export default ButtonIcon