import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import {  yaz,puansil,bitir } from "../redux/memorySlice";
import { useEffect } from "react";
var secili = [];

export default function Card({ item }) {
  const found = useSelector((item) => item.memory.found);
  const dispatch = useDispatch();
  const handleChoice = (e, item) => {
    e.currentTarget.classList.add("active");
    if (secili.length === 0) {
      secili.push({ id: item.id, name: item.name });
    } else if (secili.length === 1) {
      secili.push({ id: item.id, name: item.name });
      if (secili[0].name === secili[1].name) {
        dispatch(yaz(secili));
        secili = [];
      }
      else{
        setTimeout(() => {secili.map(o => {
            document.getElementById(`card${o.id}`).classList.remove("active");
            secili = [];
            return true;
         })},750);
         dispatch(puansil())
      }
    }
  };

  useEffect(() => {
    found.length === 30 && dispatch(bitir());
  },[found,dispatch])

  return (
    <div
      className={`card ${found.find((bu) => bu.id === item.id) !== undefined && "active"}`}
      id={`card${item.id}`}
      onClick={(e) => {
        handleChoice(e, item);
      }}
    >
      <div className="front">?</div>
      <div className="back">
        <img
          crossOrigin="anonymous"
          src={`./assets/${item.short}.svg`}
          alt="game"
        />
      </div>
    </div>
  );
}
