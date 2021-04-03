import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'

interface Props {
    label: string;
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

const InputDatePicker: React.FC<Props> = ({ label, selectedDate, onDateChange }) => {
    const [date, setDate] = useState(selectedDate);

    useEffect(() => {
        onDateChange(date);
    }, [date]);

    const handleChange = event => setDate(event.value);

    return (
        <div className="flex flex-col relative">
            <label className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light">{label}</label>
            <DatePicker selected={date} onChange={date => setDate(date)} />
         </div>
    );
}

export default InputDatePicker