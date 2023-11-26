const CalendarCard = ({ dayAbv, day, active=false }) => {
  return (
    <div className={`calendar-day ${active && "active"}`}>
      <p>{dayAbv}</p>
      <h3>{day}</h3>
    </div>
  );
};

export default CalendarCard;
