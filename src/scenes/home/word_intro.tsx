import Typewriter from "typewriter-effect";

const Word_intro = () => {
  const wordarray: Array<string> = [
    "Programer",
    "Gamer",
    "Electrical Engineering",
    "Web Developer Back End and Fornt End",
  ];

  return (
    <h1>
      I am a
      <Typewriter
        options={{
          strings: wordarray,
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
};

export default Word_intro;
