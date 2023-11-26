import { useEffect, useState } from "react";

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [daysInMonth, setDaysInMonth] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const days = new Date(year, month, 0).getDate();

    setCurrentYear(year);
    setCurrentMonth(month);
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar-top">
        <h2>{currentYear}</h2>
        <h2>{currentMonth}</h2>
      </div>
      <div className="calendar-bottom">
      

        <div className="calendar-day">
          <p>Sun</p>
          <h3>10</h3>
        </div>
        <div className="calendar-day active">
          <p>Mon</p>
          <h3>11</h3>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
