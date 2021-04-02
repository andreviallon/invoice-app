import { useState, useEffect } from 'react'

interface Props {
    label: string;
    onInputChange: (inputValue: string) => void;
}

const InputField: React.FC<Props> = ({ label, onInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        onInputChange(inputValue);
    }, [inputValue]);

    const handleChange = event => setInputValue(event.target.value);

    const inputClasses = 'border-secondary-light border-2 rounded px-4 py-6 text-xs font-bold text-secondary-veryDark focus:border-primary-regular focus:outline-none';

    return (
        <>
            <label className="text-secondary-dark text-xs font-medium mb-2">{label}</label>
            <input className={inputClasses} placeholder="some placeholder" value={inputValue} onChange={handleChange}/>
        </>
    )
}

export default InputField