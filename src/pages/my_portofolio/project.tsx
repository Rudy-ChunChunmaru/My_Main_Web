import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
  } from "@/components/ui/card"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    dataProject
  } from "./data"

export function Project() {
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    Project
                </CardTitle>
            </CardHeader>
            <CardContent className="w-full h-full">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    orientation="vertical"
                    className="w-full h-fit"
                >
                    <CarouselContent className="w-[100%] h-[500px] md:h-[350px]">
                        {dataProject.map((value,index)=>{
                            return(
                            <CarouselItem key={`kapsule-${index}`} className="flex flex-col md:flex-row gap-5 md:gap-10 justify-start" >
                                <Card key={`kapsuleCard-${index}`} className="w-[100%] md:w-[50%] h-full shadow-lg">
                                    <CardHeader key={`kapsuleCardHeader-${index}`}>
                                        <CardTitle>{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent key={`kapsuleCardConten-${index}`}>
                                        <CardDescription>
                                            {value.info}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    orientation="horizontal"
                                    className="w-[75%] mx-auto md:w-[30%] h-full"
                                    key={`kapsuleCardkapuselphoto-${index}`}
                                >
                                    <CarouselContent key={`kapsuleCardkapuselphotoHead-${index}`} className="w-fit h-full ">
                                        {value.photodetail.map((valuePhoto,indexPhoto)=>{
                                            return(
                                                <CarouselItem key={`kapsuleCardkapuselphotodetail-${indexPhoto}`} className=" h-full">
                                                    <img
                                                        className="my-auto w-[100%]"
                                                        src={valuePhoto}
                                                        alt={`portofolio_image_` + valuePhoto}
                                                    />
                                                </CarouselItem>
                                            )
                                        })}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </CarouselItem>
                            )
                        })}

                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </CardContent>
        </Card>
    )
}