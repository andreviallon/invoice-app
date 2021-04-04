import React, { useEffect, useState } from 'react';
import Select from 'react-select-me';

interface Props {
    label: string;
    defaultSelectOption: string;
    selectOptions: string[];
    onSelectChange: (inputValue: string) => void;
}

const InputSelect: React.FC<Props> = ({ label, defaultSelectOption, selectOptions, onSelectChange }) => {
    const [selectValue, setSelectValue] = useState(defaultSelectOption ? defaultSelectOption : selectOptions[0]);

    useEffect(() => {
        onSelectChange(selectValue);
    }, [selectValue]);

    const handleChange = event => setSelectValue(event.value);

    return (
        <div className="flex flex-col relative">
            <label className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light">{label}</label>
            <Select options={selectOptions} value={selectValue} onChange={handleChange} />
         </div>
    );
}

export default InputSelect