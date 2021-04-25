import { ButtonTypeEnum } from '../models/ButtonTypes'

interface Props {
    text: string;
    buttonType: ButtonTypeEnum;
    buttonClick: () => void;
}

const Button: React.FC<Props> = ({ text, buttonType, buttonClick }) => {
    const classes = (buttonType): string => {
        let classes: string = 'py-4 px-6 rounded-full font-bold text-xs focus:outline-none h-12 capitalize';
        
        if (buttonType === ButtonTypeEnum.PRIMARY) {
            classes = `${classes} text-white bg-primary-regular hover:bg-primary-light`;
        }

        if (buttonType === ButtonTypeEnum.SECONDARY) {
            classes = `
                ${classes}
                text-secondary-dark
                bg-background
                hover:bg-secondary-light

                dark:bg-primary-veryDark
                dark:text-secondary-regular
                dark:hover:bg-white
            `;
        }

        if (buttonType === ButtonTypeEnum.TERTIARY) {
            classes = `
                ${classes}
                text-secondary-regular
                bg-primary-veryDark
                hover:bg-black

                dark:text-red
                :hover:dark:bg-primary-dark
            `;
        }

        if (buttonType === ButtonTypeEnum.DANGER) {
            classes = `${classes} text-white bg-danger-regular hover:bg-danger-light`;
        }

        return classes;
    }
    
    return (
        <button className={classes(buttonType)} onClick={buttonClick}>{text}</button>
    )
}

export default Button