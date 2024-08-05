'use client'
import React, { useState } from 'react';

const getDaysInMonth = (year, month) => {
  return new Array(31).fill(null).map((_, i) => new Date(year, month, i + 1)).filter(date => date.getMonth() === month);
};

export default function DatePicker() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleMonthChange = (event) => {
    setSelectedMonth(Number(event.target.value));
  };

  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };

  const handlePrevMonth = () => {
    setSelectedMonth(prevMonth => (prevMonth - 1 + 12) % 12);
  };

  const handleNextMonth = () => {
    setSelectedMonth(prevMonth => (prevMonth + 1) % 12);
  };

  const days = getDaysInMonth(selectedYear, selectedMonth);

  return (
    <div className="p-3 space-y-0.5 w-[350px]">
      {/* Months */}
      <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3 w-[272px]">
        <div className="col-span-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            aria-label="Previous"
          >
            &lt;
          </button>
        </div>
        <div className="col-span-3 flex justify-center items-center gap-x-1">
          <select value={selectedMonth} onChange={handleMonthChange}>
            {[...Array(12).keys()].map(month => (
              <option key={month} value={month}>
                {new Date(0, month).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
          <span>/</span>
          <select value={selectedYear} onChange={handleYearChange}>
            {[2023, 2024, 2025, 2026, 2027].map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1 flex justify-end">
          <button
            type="button"
            onClick={handleNextMonth}
            aria-label="Next"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Weeks */}
      <div className="flex pb-1.5">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
          <span key={day} className="m-px w-10 block text-center text-sm text-gray-500">
            {day}
          </span>
        ))}
      </div>

      {/* Days */}
      <div className="flex flex-wrap">
        {days.map(day => (
          <div key={day.getDate()} className="m-px w-10 flex justify-center items-center">
            <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600">
              {day.getDate()}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
