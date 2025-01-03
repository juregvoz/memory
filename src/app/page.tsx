'use client';
import { useState } from "react";
import Board from "./board";
import Result from "./result";

export default function Home() {
  const [result, setResult] = useState<[number, number]>([0, 0]);
  const [player, setPlayer] = useState<number>(1);


  return (
    <div>
      <Result result={result} player={player} />
      <Board result={result} setResult={setResult} player={player} setPlayer={setPlayer} />
    </div>
  );
}
