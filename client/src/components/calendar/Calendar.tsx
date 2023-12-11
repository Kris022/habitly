import "./calendar.css";
import CalendarCard from "./CalendarCard";

const Calendar = () => {
  const dates = [
    { day: "11", abv: "Mon" },
    { day: "10", abv: "Sun" },
    { day: "09", abv: "Sat" },
    { day: "08", abv: "Fri" },
  ];

  return (
    <div className="calendar-container">
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
    </div>
  );
};

export default Calendar;
