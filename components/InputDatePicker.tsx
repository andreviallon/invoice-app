import { ChangeEvent, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

interface Props {
    label: string;
    name: string;
    selectedDate?: string | Date;
    error: string;
    touched: boolean;
    onDateChange: (date: ChangeEvent) => void;

}

const InputDatePicker: React.FC<Props> = ({ label, name, selectedDate, error, touched, onDateChange }) => {
    const [date, setDate] = useState(selectedDate);

    useEffect(() => {
        setDate(date);
    }, [date]);

    const handleChange = (date) => {
        console.log('date', date);
        onDateChange(date.toString());
    }

    return (
        <div className="flex flex-col relative">
            <label className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light" htmlFor={name}>{label}</label>
            <input type="date" name={name} id={name} onChange={date => onDateChange(date)} />
         </div>
    );
}

export default InputDatePicker
