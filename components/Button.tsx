import { ButtonTypeEnum } from '../models/ButtonTypes';

interface Props {
    text: string;
    submit?: boolean;
    disabled?: boolean;
    buttonType: ButtonTypeEnum;
    buttonClick?: () => void;
}

const Button: React.FC<Props> = ({ text, submit, disabled, buttonType, buttonClick }) => {
    const classes = (buttonType: ButtonTypeEnum): string => {
        let classes: string = 'py-4 px-6 rounded-full font-bold text-xs focus:outline-none h-12 capitalize';

        if (disabled) {
            classes = `${classes} text-gray bg-disabled hover:bg-disabledDark`;
            
            return classes;
        }

        if (buttonType === ButtonTypeEnum.PRIMARY) {
            classes = `${classes} text-white bg-primary-regular hover:bg-primary-light`;
        }

        if (buttonType === ButtonTypeEnum.SECONDARY) {
            classes = `
                ${classes}
                text-secondary-dark
                bg-background
                hover:bg-secondary-light
            `;
        }

        if (buttonType === ButtonTypeEnum.TERTIARY) {
            classes = `
                ${classes}
                text-secondary-regular
                bg-primary-veryDark
                hover:bg-dark
            `;
        }

        if (buttonType === ButtonTypeEnum.DANGER) {
            classes = `${classes} text-white bg-danger-regular hover:bg-danger-light`;
        }

        return classes;
    }
    
    return (
        <button type={submit ? 'submit' : 'button'} disabled={disabled} className={classes(buttonType)} onClick={buttonClick}>{text}</button>
    )
}

export default Button