import { useState } from "react";

const wordarray: Array<string> = "Programer Gamer".split(" ");

const Word = () => {
  const [wordstring, setwordstring] = useState("");

  wordarray.map((word: string) => {});

  return <a className="text-center font-Protest_Riot text-3xl">{wordstring}</a>;
};

export default Word;
