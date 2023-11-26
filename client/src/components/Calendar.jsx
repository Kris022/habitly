import { useEffect, useState } from "react";
import CalendarCard from "./CalendarCard";

const Calendar = () => {
  const [currentDates, setCurrentDates] = useState([]);

  //   Need an array of date objects that looks like this
  const days = [{ day: 1, abv: "Mon" }];

  const getCurrentDate = () => {
    const currentDate = new Date();
  };

  const getTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow;
  };

  const getPreviousDates = (startDate, numDays = 4) => {
    const previousDates = [];

    for (let i = 0; i < numDays; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() - (i + 1));

      previousDates.push({
        fullDate: currentDate.toDateString(),
        dayAbbreviation: currentDate.toString().split(" ")[0],
        day: currentDate.toString().split(" ")[2],
      });
    }

    // Use a for loop that decrements instead
    return previousDates.reverse();
  };

  const getNextDates = (startDate, numDays = 4) => {
    return;
  };

  useEffect(() => {
    const tomorrow = getTomorrow();
    const dates = getPreviousDates(tomorrow);
    setCurrentDates(dates);
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar-top">
        <h2>2023/11/11</h2>
        {/* <h2>Nov</h2> */}
      </div>
      <div className="calendar-bottom">
        <div>{"<-"}</div>
        <div className="days-container">
          {currentDates.map((date, index) => (
            <CalendarCard
              key={index}
              dayAbv={date.dayAbbreviation}
              day={date.day}
            />
          ))}

          {/* <CalendarCard dayAbv={"Mon"} day={11} active={true} /> */}
        </div>
        <div>{"->"}</div>
      </div>
    </div>
  );
};

export default Calendar;
