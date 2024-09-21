import React from "react";
import DatePicker from "react-datepicker";
import "./date-picker.css";

interface CustomDatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  maxDate?: Date | null;
  minDate?: Date | null;
  placeholderText?: string;
  id: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selected,
  onChange,
  maxDate = null,
  minDate = new Date(1900, 0, 1),
  placeholderText = "Select a date",
  id,
}) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      minDate={minDate}
      maxDate={maxDate || undefined}
      dateFormat="dd/MM/yyyy"
      placeholderText={placeholderText}
      id={id}
      customInput={<input type="text" className="form-control" />}
    />
  );
};

export default CustomDatePicker;
