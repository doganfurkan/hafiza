import { useSelector } from "react-redux";

export default function Theme() {
  const score = useSelector((item) => item.memory.score);
  return (
    <div id="theme">
      <label className="switch">
        <input aria-label="theme-changer"
          type="checkbox"
          onChange={() => {
            document.body.classList.toggle("dark");
          }}
        />
        <span className="slider round"></span>
      </label>
      <div id="score">
      <div id="skor">Score</div><div id="puan">{score}</div>
      </div>
    </div>
  );
}
