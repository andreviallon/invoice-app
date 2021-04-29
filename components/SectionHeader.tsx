interface Props {
    text: string;
}

const SectionHeader: React.FC<Props> = ({ text }) => {
    return (
        <p className="text-primary-regular text-sm font-bold capitalize my-6">{text}</p>
    )
}

export default SectionHeader