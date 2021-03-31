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
    return (
        <button className="bg-primary-regular hover:bg-primary-light text-white py-4 px-6 rounded-full font-bold text-xs">{text}</button>
    )
}

export default Button
