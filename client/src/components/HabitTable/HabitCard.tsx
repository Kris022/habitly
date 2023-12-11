import { useState } from "react";

interface HabitObject {
  name: string;
  complete: boolean;
}

interface HabitCardProps {
  habit: HabitObject;
}

interface CardProps {
  habit: any;
}

const HabitCard = ({ habit }: CardProps) => {
  const [isComplete, setIsComplete] = useState(habit.complete);

  const handleComplete = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div className="habit-card" onClick={handleComplete}>
      <div>
        <h2>{habit.name}</h2>
        <p>07:00 AM</p>
      </div>
      <div className={`checkbox ${isComplete && "active"}`}></div>
    </div>
  );
};

export default HabitCard;
