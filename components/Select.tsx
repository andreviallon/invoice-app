import { useState, useEffect } from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    label: string;
    selectOptions: string[];
    onSelectChange: (inputValue: string) => void;
}

const Select: React.FC<Props> = ({ label, selectOptions, onSelectChange }) => {
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        onSelectChange(selectValue);
    }, [selectValue]);

    const handleChange = event => setSelectValue(event.target.value);

    const inputClasses = `
        appearance-none
        block
        border-secondary-light
        border-2
        rounded
        w-full
        px-4
        py-6
        text-xs
        font-bold
        text-secondary-veryDark
        appearance-none

        dark:border-primary-dark
        dark:bg-primary-dark
        dark:text-white
        
        focus:border-primary-regular
        focus:outline-none`;

    return (
        <div className="flex flex-col relative">
            <label className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light">{label}</label>
            <div className="relative">
                <select className={inputClasses} value={selectValue} onChange={handleChange}>
                    {selectOptions.map(selectOption => (
                        <option key={selectOption} value={selectOption}>{selectOption}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2">
                    <FontAwesomeIcon className="text-primary-regular" icon={faAngleDown} />
                </div>
            </div>
        </div>
    )
}

export default Select