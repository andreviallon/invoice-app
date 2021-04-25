import { ChangeEvent } from 'react';
import InputError from './InputError';

interface Props {
    label: string;
    name: string;
    value?: string;
    placeholder?: string;
    error: string;
    touched?: boolean;
    onChange: (e: ChangeEvent<any>) => void;
    onBlur: (e: ChangeEvent<any>) => void;
}

const InputField: React.FC<Props> = ({ label, name, value, placeholder, error, touched, onChange, onBlur }) => {
    const containerClasses = (): string => {
        let classes = `flex flex-col`;

        if (error && touched) {
            classes = `${classes} error`;
        }

        return classes
    }

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
        <div className={containerClasses()}>
            <label className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light">{label}</label>
            <input name={name} className={inputClasses} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
            {error && <InputError errorMessage={error} />}
        </div>
    )
}

export default InputField