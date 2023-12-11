import { useState } from "react";
import "./App.css";
import HabitTable from "./components/HabitTable/HabitTable";
import Navbar from "./components/Navbar/Navbar";
import Calendar from "./components/calendar/Calendar";
import ProgressBar from "./components/Progress/ProgressBar";
import HabitView from "./components/HabitView/HabitView";

function App() {
  return (
    <div className="app">
      {/* <Calendar /> */}
      {/* <ProgressBar /> */}
      {/* <HabitTable /> */}
      <HabitView />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
