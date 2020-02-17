import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatePickerCustom = ({getCalendarDate}) => {
    const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={date => {getCalendarDate(date); setStartDate(date)}}
      onClick={getCalendarDate}
      minDate={new Date("01-01-2020")}
      maxDate={new Date("01-31-2020")}
      placeholderText="Select a date in January"
    />
  );
  };

export default DatePickerCustom;