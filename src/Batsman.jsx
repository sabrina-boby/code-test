import { useState } from "react";

export default function Batsman() {
  const [run, setRun] = useState(0);
  const [single, setSingle] = useState(0);
  const [four, setFour] = useState(0);
  const [six, setSix] = useState(0);
  const handleSingle = () => {
    const updateRun = run + 1;
    const updateSing = single + 1;
    setRun(updateRun);
    setSingle(updateSing);
  };
  const handleFour = () => {
    const updateRun = run + 4;
    const updateFour=four+1;
    setFour(updateFour);
    setRun(updateRun);
  };
  const handleSix = () => {
    const updateRun = run + 6;
    const updateSix = six + 1;
    setRun(updateRun);
    setSix(updateSix);
  };
  return (
    <div>
      <h1>Player score = {run}</h1>
      <button onClick={handleSingle}>single</button> <p>single = {single}</p>
      <button onClick={handleFour}>four</button><p>four = {four}</p>
      <button onClick={handleSix}>six</button><p>six = {six}</p>
    </div>
  );
}
