import Typewriter from "typewriter-effect";

const Word_intro = () => {
  const wordarray: Array<string> = [
    "Programer",
    "Gamer",
    "Electrical Engineer",
    "Web Developer BackEnd and ForntEnd",
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
