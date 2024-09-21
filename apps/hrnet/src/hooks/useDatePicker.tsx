import React, { useState } from "react";
import CustomDatePicker from "date-picker";

interface UseDatePickerProps {
  maxDate?: Date | null;
  minDate?: Date | null;
  placeholderText?: string;
  id: string;
}

export interface UseDatePickerApi {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  datePickerComponent: JSX.Element;
}

export const useDatePicker = ({
  maxDate = null,
  minDate = new Date(1900, 0, 1),
  placeholderText = "Select a date",
  id,
}: UseDatePickerProps): UseDatePickerApi => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const datePickerComponent = (
    <CustomDatePicker
      selected={selectedDate}
      onChange={(date: Date | null) => setSelectedDate(date)}
      maxDate={maxDate}
      minDate={minDate}
      id={id}
      placeholderText={placeholderText}
    />
  );

  return {
    selectedDate,
    setSelectedDate,
    datePickerComponent,
  };
};
