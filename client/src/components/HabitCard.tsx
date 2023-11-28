interface HabitObject {
  name: string;
  complete: boolean;
}

interface HabitCardProps {
  habit: HabitObject;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  return (
    <div className="habit-card">
      <div>
        <h2>{habit.name}</h2>
        <p>07:00 AM</p>
      </div>
      <div className={`checkbox ${habit.complete && "active"}`}></div>
    </div>
  );
};

export default HabitCard;
