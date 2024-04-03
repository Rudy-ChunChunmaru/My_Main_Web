import Typewriter from "typewriter-effect";

const Word_wellcome = () => {
  return (
    <Typewriter
      options={{
        delay: "natural",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Wellcome To My PROFILE WEB")
          .pauseFor(2500)
          .deleteAll()
          .typeString("I'M RUDY")
          .start();
      }}
    />
  );
};

export default Word_wellcome;
