import { useState, useEffect } from "react";

const Word = () => {
  const wordarray: Array<string> = [
    "Programer",
    "Gamer",
    "Electrical Engineering",
    "Web Developer Back End",
    "Web Developer Fornt End",
  ];

  let numword = 0;
  const [wordstring, setwordstring] = useState(wordarray[numword]);

  useEffect(() => {
    const interval = setInterval(() => {
      numword++;
      if (numword >= wordarray.length) numword = 0;
      setwordstring(wordarray[numword]);
    }, 7000);
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-center font-Protest_Riot text-3xl">{wordstring}</span>
  );
};

export default Word;
