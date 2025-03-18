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

export function Project() {
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    Project
                </CardTitle>
            </CardHeader>
            <CardContent>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                orientation="vertical"
                className="w-full"
            >
                <CarouselContent className="w-[100%] h-[300px]">
                    <CarouselItem className="flex justify-start gap-12" >
                        <Card className="w-[70%] h-full">
                            <CardHeader>
                                <CardTitle>title</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    test
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            orientation="horizontal"
                            className="w-[20%] h-full"
                        >
                            <CarouselContent className="w-full h-[100%]">
                                <CarouselItem>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>title test1</CardTitle>
                                        </CardHeader>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>title test2</CardTitle>
                                        </CardHeader>
                                    </Card>
                                </CarouselItem>
                               
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
            </CardContent>
        </Card>
    )
}