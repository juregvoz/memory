'use client';
import { useState } from "react";
import Board from "./board";
import Result from "./result";
import { useSize } from "./useSize";

export default function Home() {
  const [result, setResult] = useState<[number, number]>([0, 0]);
  const [player, setPlayer] = useState<number>(1);
  const size = useSize();

  return (
    <div>
      <Result result={result} player={player} width={size.width} />
      <Board result={result} setResult={setResult} player={player} setPlayer={setPlayer} size={size} />
    </div>
  );
}