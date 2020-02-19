import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerCustomComponent.scss";

const DatePickerCustom = ({ getCalendarDate }) => {
  const [startDate, setStartDate] = useState(new Date("2020-01-01T08:00:00Z"));
  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        getCalendarDate(date);
        setStartDate(date);
      }}
      onClick={getCalendarDate}
      minDate={new Date("2020-01-01T08:00:00Z")}
      maxDate={new Date("2020-01-31T08:00:00Z")}
      placeholderText="Select a date in January"
    />
  );
};

export default DatePickerCustom;
