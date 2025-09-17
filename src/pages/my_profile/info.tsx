import Typewriter from "typewriter-effect";

export function Info(){
    const wordarray: Array<string> = [
        "Programer",
        "Developer",
        "Data Analyst",
        "Electrical Engineer",
      ];
    
    return (
        <h1>
          Who am I ?
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