export enum ButtonTypeEnum {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    DANGER = 'danger'
}

interface Props {
    text: string;
    buttonType: ButtonTypeEnum;
}

const Button: React.FC<Props> = ({ text, buttonType }) => {
    const classes = (buttonType): string => {
        let classes: string = 'py-4 px-6 rounded-full font-bold text-xs focus:outline-none';
        
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
                dark:text-primary-light
                hover:dark:text-white
            `;
        }

        if (buttonType === ButtonTypeEnum.DANGER) {
            classes = `${classes} text-white bg-danger-regular hover:bg-danger-light`;
        }

        return classes;
    }
    
    return (
        <button className={classes(buttonType)}>{text}</button>
    )
}

export default Button
