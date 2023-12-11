import "./HabitTable.css";
import HabitCard from "./HabitCard";

interface HabitObject {
  name: string;
  complete: boolean;
}

interface HabitCardProps {
  habit: HabitObject;
}

const habits = [
  { name: "🏋️ Gym", complete: false },
  { name: "📖 Morning Read", complete: true },
  { name: "⏰ Coding Challenge", complete: true },
  { name: "⏰ Coding Challenge", complete: true },
  { name: "⏰ Coding Challenge", complete: true },
  { name: "⏰ Coding Challenge", complete: true },
  { name: "⏰ Coding Challenge", complete: true },
  { name: "⏰ Coding Challenge", complete: true },
  { name: "📅 Behavioural Interview prep", complete: false },
];

const HabitTable = () => {
  return (
    <div className="habit-table">
      {habits.map((habit, index) => (
        <HabitCard key={index} habit={habit} />
      ))}
    </div>
  );
};

export default HabitTable;
