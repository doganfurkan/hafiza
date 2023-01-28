import React from 'react'
import Card from './Card';
import {useSelector} from "react-redux"

function shuffleArray(array) {
    console.log("karıştır")
    let doncek = [...array];
    let i = array.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = doncek[i];
      doncek[i] = doncek[j];
      doncek[j] = temp;
    }
    return doncek;
  }

export default function Grid() {
    const items = useSelector(state => state.memory.items);
    const shuffled = shuffleArray(items);

  return (
    <div id="grid">
        {shuffled.map((item,key) => {
        return <Card key={key} item={item}/>
      })}
    </div>
  )
}
