import Die from "./Die";
import "./Dice.css";
function Dice({ dice, color }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}
export default Dice;

[3, 4, 2];
