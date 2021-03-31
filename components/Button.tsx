export enum ButtonTypeEnum {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
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
                dark:text-white
                dark:hover:bg-white
                dark:hover:text-primary-veryLight
            `;
        }

        if (buttonType === ButtonTypeEnum.TERTIARY) {
            classes = `
                ${classes}
                text-secondary-regular
                bg-primary-veryDark
                hover:bg-black

                dark:text-secondary-light
                :hover:dark:bg-primary-dark
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
