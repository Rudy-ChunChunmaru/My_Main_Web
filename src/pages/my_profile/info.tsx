import Typewriter from "typewriter-effect";

export function Info(){
    const wordarray: Array<string> = [
        "Programer",
        "Gamer",
        "Electrical Engineer",
        "Web Developer Backend",
        "Web Developer Frontend",
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
}