import { ChangeEvent } from 'react';

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
    return (
        <div className="flex flex-col relative">
            <label htmlFor="select" className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light">{label}</label>
            <select name={name} value={defaultSelectOption} onChange={onChange} onBlur={onBlur} className="appearance-none">
                {selectOptions.map(option => (
                    <option key={option} value={option} label={option} />
                ))}
            </select>
         </div>
    );
}

export default InputSelect
