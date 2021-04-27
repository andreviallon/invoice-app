import { ChangeEvent } from 'react';
import InputError from './InputError';

interface Props {
    label: string;
    name: string;
    defaultSelectOption: string;
    selectOptions: string[];
    error: string;
    touched: boolean;
    onChange: (e: ChangeEvent<any>) => void;
    onBlur: (e: ChangeEvent<any>) => void;
}

const InputSelect: React.FC<Props> = ({ label, name, defaultSelectOption, selectOptions, error, touched, onChange, onBlur }) => {
    const containerClasses = (): string => {
        let classes = `flex flex-col relative`;

        if (error && touched) classes = `${classes} error`;

        return classes;
    }

    const selectClasses = `
    border-secondary-light
    border
    rounded
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
        <div className={containerClasses()} >
            <label htmlFor="select" className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light">{label}</label>
            <select name={name} value={defaultSelectOption} onChange={onChange} onBlur={onBlur} className={selectClasses}>
                {selectOptions.map(option => (
                    <option key={option} value={option} label={option} />
                ))}
            </select>
            {error && touched && <InputError errorMessage={error} />}
         </div>
    );
}

export default InputSelect