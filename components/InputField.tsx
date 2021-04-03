import { useState, useEffect } from 'react'

interface Props {
    label: string;
    placeholder: string;
    onInputChange: (inputValue: string) => void;
}

const InputField: React.FC<Props> = ({ label, placeholder, onInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        onInputChange(inputValue);
    }, [inputValue]);

    const handleChange = event => setInputValue(event.target.value);

    const inputClasses = `
        border-secondary-light
        border
        rounded
        px-4
        py-6
        text-xs
        font-bold
        text-secondary-veryDark

        dark:border-primary-dark
        dark:bg-primary-dark
        dark:text-white
        
        focus:border-primary-regular
        focus:outline-none`;

    return (
        <div className="flex flex-col">
            <label className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light">{label}</label>
            <input className={inputClasses} placeholder={placeholder} value={inputValue} onChange={handleChange} />
        </div>
    )
}

export default InputField