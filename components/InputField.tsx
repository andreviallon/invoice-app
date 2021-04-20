import { useState, useEffect, ChangeEvent } from 'react'

interface Props {
    label: string;
    name: string;
    value?: string;
    placeholder?: string;
    error: string;
    touched?: boolean;
    onChange: (e: ChangeEvent<any>) => void;
    onBlur: (e) => void;
}

const InputField: React.FC<Props> = ({ label, name, value, placeholder, error, touched, onChange, onBlur }) => {
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
            <input name={name} className={inputClasses} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
        </div>
    )
}

export default InputField