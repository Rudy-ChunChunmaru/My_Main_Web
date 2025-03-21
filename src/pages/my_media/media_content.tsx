import { File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Command, CommandList , CommandSeparator ,CommandGroup, CommandItem } from "@/components/ui/command";

const data_media = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/rudy_mu_/",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 50 50"
        >
          <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
        </svg>
      ),
    },
    {
      title: "Github",
      link: "https://github.com/Rudy-ChunChunmaru",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
        >
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
        </svg>
      ),
    },
    {
      title: "Linkin",
      link: "https://www.linkedin.com/in/rudy-m-7a87b9115/",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 50 50"
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
      ),
    },
  ];
  
  const data_cv = [
    {
      title: "CV Ing",
      link: "https://drive.google.com/file/d/1KcXOdlbIrfno4ChKSUNRtLzbPOeQQfVN/view?usp=sharing",
    },
    {
      title: "CV Indo",
      link: "https://drive.google.com/file/d/1PHvG86RzIDZbaaNtlwu-kLusJAtYY6q7/view?usp=sharing",
    },
  ];


export function MediaContent() {
    return (
        <Command>
            <CommandList>
                <CommandGroup heading="Curriculum Vitae">
                    {data_cv.map((value,index)=>{
                        return(
                       
                                <Button key={index} variant={"ghost"} className="w-[100%] justify-start hover:bg-gray-300" onClick={()=>window.open(value.link,"_blank")}>
                                    <File />
                                    <strong>{value.title}</strong>
                                </Button>
               
                        )
                    })}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Media Sosial">
                    {data_media.map((value,index)=>{
                        return(

                                <Button key={index} variant={"ghost"} className="w-[100%] justify-start hover:bg-gray-300" onClick={()=>window.open(value.link,"_blank")}>
                                    {value.logo}
                                    <strong>{value.title}</strong>
                                </Button>
                        )
                    })}
                </CommandGroup>
            </CommandList>
        </Command>
    )
}