import React, { ChangeEvent, useEffect, useState } from 'react';
import InputError from './InputError';

interface Props {
    label: string;
    name: string;
    selectedDate?: string | Date;
    error: string;
    touched: boolean;
    onChange: (date: ChangeEvent) => void;

}

const InputDatePicker: React.FC<Props> = ({ label, name, selectedDate, error, touched, onChange }) => {
    const containerClasses = (): string => {
        let classes = `flex flex-col relative`;

        if (error && touched) {
            classes = `${classes} error`;
        }

        return classes
    }

    return (
        <div className={containerClasses()}>
            <label className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light" htmlFor={name}>{label}</label>
            <input type="date" name={name} id={name} onChange={date => onChange(date)} />
            {error && <InputError errorMessage={error} />}
         </div>
    );
}

export default InputDatePicker