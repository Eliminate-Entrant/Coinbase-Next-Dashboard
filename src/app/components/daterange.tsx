import React, { useState } from 'react';
import enGB from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';

registerLocale('en-GB', enGB as any);

interface DateRangePickerProps {
  onSelectDates: [(startDate: Date | null) => void, (endDate: Date | null) => void];
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onSelectDates }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    onSelectDates[0](date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    onSelectDates[1](date);
  };

  const maxEndDate = new Date();

  const handleEndSelected = (date: Date | null) => {
    if (date && date > maxEndDate) {
      date = maxEndDate;
    }
    handleEndDateChange(date);
  };

  return (
    <div className="grid grid-cols-1 gap-10 justify-items-end">
      <div className="relative">
        <label className="absolute top-0 left-0 text-xs font-semibold inline-block py-1 px-2">Select Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          maxDate={maxEndDate}
          placeholderText="Start Date"
          dateFormat="dd/MM/yyyy"
          locale="en-GB"
          className="w-full mt-5 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="relative">
        <label className="absolute top-0 left-0 text-xs font-semibold inline-block py-1 px-2">Select End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndSelected}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          placeholderText="End Date"
          dateFormat="dd/MM/yyyy"
          locale="en-GB"
          minDate={startDate}
          maxDate={maxEndDate}
          className="w-full mt-5 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
