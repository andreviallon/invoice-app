interface Props {
    errorMessage: string;
}

const InputError: React.FC<Props> = ({ errorMessage }) => {
    return <span className="mt-2 text-sm font-medium">{errorMessage}</span>
}

export default InputError