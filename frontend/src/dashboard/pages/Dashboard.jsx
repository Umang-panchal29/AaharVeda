import React from "react";
import {
  TrendingUp,
  ShoppingCart,
  Utensils,
  ExternalLink,
  Leaf,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg text-primetext font-semibold md:text-base">
          Dashboard
        </h1>
      </div>

      <section className="flex flex-col md:flex-row w-full h-max items-center justify-between">
        {/* Trending Recipe */}
        <div className="w-72">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm tracking-wide font-medium text-primary">
                Trending Recipe
                <p className="text-[10px] text-primetext">💖 Most Likely</p>
              </CardTitle>
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-6 py-2">
              <Carousel className="w-full mx-auto max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div>
                        <Card className="border-0">
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                            <img
                              className="rounded-full shadow-md"
                              src="https://edamam-product-images.s3.amazonaws.com/web-img/50b/50b1b42b19b2037118c82e10c4b14acb-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLWVhc3QtMSJGMEQCIFdFPNA5jpLl0AWh5AcBYfxq90Uc38f0gtCOvwXF3bILAiAAlpUkG3rpnSYWzbQ9L%2BP6FnaIDYOFWToHsuHVy3F9IyrBBQiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMjEUaRM1C3%2FDYhATDKpUFdXHngAse9bvyo5ww6GWwU9j00ftnsfdYDb2F01yKGMpuQAaTaHyXziYAHDATyrGVax8evfWbTMaVBxodMeAgcEB5ALd%2BVcCBb4risVg07trxSnLSToXVKk6NQpRewooLzGvE0H4FZJlsgm65q9FOAXubGOAQZ8ud8W9cv8ME5WLtRVZdfq0KXMSEmqPo88CgzuWN%2FdgXJLqtiegRv2KY%2B0BK7edOz%2FzWctOUoywKw%2BJSrImVAlCppc%2F6bZqsj4Kc761V37zRPrOQHZsQ0Xne7Owid%2F7p%2FnCoLnbEIj99omc%2BNxCh%2BRGdbLitZIzsE9ZVVZRWaC3Wwkv%2F1UeSpiKKGqo6VXbONsgsPWlnA1lxsIZUGhn6oWFQ7ZxOnYDfua3iFaP%2FBPPHnCjOCpcFV3E5FtipCyLYeRdMp0hCwTbAw9dMyjdUMR6cCidyC05BlwXNLmLmV3NLzKJRDFwwTyljTGeS56kqQpl%2FHo9KbbGAmfVaQ2v%2FSXlxzBUfoY3o75qCKUEpTHbDv%2BVg9Y0QhHpfdHmXTuoNt6UA36udb7OkT6xFspcXW2N2Smq4IOxoub1bm7rDh6ArC2vQxeTPLdQKOfjsowldqjMacgT%2Btr8NvslunqrcpbU%2BmqPVDlhI%2FzA%2BLoLIBh%2FUrkhBcOqQU4O5daypEZiquSU%2FZ2Kj7MPB%2BB4TxCoZRWku25MOINCtLEg88F67womBPfEJ12tiY4f7lYt%2BM32MvC7ztbkQjbcnOf8u3%2FmfoIguJlO%2B7hM585fzU%2FXFvHVprwSzur7FwcogOOnvVmmxEw15eIcxDMbvf9I0fOwQYWwRfshw%2FJisuIFsWKQ328DxWd%2BeypxYxfIPASxRMhd8TRg4EaC1Pfs%2BU1QT35TucDCDqPayBjqyAYYewefGyDZhWFP76drXbf15teV5vWH1GMPBQCjRVqej39ns6dz1Yk3Kb2RSR9TaiUx3omxg0ijMCLKfrO292D%2Bb0VxahQfw1KWUDgPuwOBCM8eYvqBw0fxM8YfD%2BtrJRauJ91UreWWaLUFJLh13aV0dRH5WvSLo5c1KAPkvhQNOMPo%2BO0fI4AeSIWGdom86HrJtIXp6m6WfgS8lRDdmR6%2FVhznxMGZFuEs6%2BrwXo1swoJ0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240603T104931Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCIWUUEXI%2F20240603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=16727e48b1709160873c1b2cb212b36617fe27710d4940ad2bdaf0aefaf81a3c"
                              alt="Food"
                            />
                            <span className="text-sm mt-3 font-semibold">
                              Avocado & chilli salad
                            </span>
                            <p className="w-full mt-3 flex justify-between">
                              <Badge
                                variant="secondary"
                                className="text-[10px] py-1"
                              >
                                <Utensils className="w-3 h-3 mr-1" />{" "}
                                lunch/dinner
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="text-[10px] py-1"
                              >
                                <ShoppingCart className="w-3 h-3 mr-1" /> 6
                                Ingredients
                              </Badge>
                            </p>
                            <a
                              className="text-sm mt-5 text-muted-foreground text-primary flex item-center hover:underline"
                              href="#"
                            >
                              Know more{" "}
                              <ExternalLink className="w-[14px] h-[14px] ml-1" />
                            </a>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-2" />
                <CarouselNext className="-right-2" />
              </Carousel>
            </CardContent>
          </Card>
        </div>

        {/* Daily Nutrients Section */}
        <div className="w-72 mt-3 md:mt-0 h-full">
          <Card className="sm:col-span-2 h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm tracking-wide font-medium text-primary">
                Daily Nutrients
                <p className="text-[10px] text-primetext">
                  🥑 Your Daily Nutrients Intake
                </p>
              </CardTitle>
              <Leaf className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center mt-2">
              <div className="w-48 h-48">
                <Doughnut
                  // options = {data}
                  data={{
                    labels: ["Fat", "Protein", "Carbs"],
                    datasets: [
                      {
                        label: "Nutrients",
                        data: [300, 50, 100],
                        backgroundColor: ["#ff8f92", "#ffe773", "#0da7d5c7"],
                        borderColor: ["#ff5a5f", "#ffd817", "#0da7d5"],
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  // {...props}
                />
              </div>
              <a
                variant="outline"
                className="text-sm relative -bottom-4 text-muted-foreground text-primary flex item-center p-0"
              >
                Set Intake <ExternalLink className="w-[14px] h-[14px] ml-1" />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Today Recipe */}
        <div className="w-72">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm tracking-wide font-medium text-primary">
                Today Recipe
                <p className="text-[10px] text-primetext">🥣 Your Daily Recipe Plan</p>
              </CardTitle>
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-6 py-2">
              <Carousel className="w-full mx-auto max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div>
                        <Card className="border-0">
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                            <img
                              className="rounded-full shadow-md"
                              src="https://edamam-product-images.s3.amazonaws.com/web-img/43d/43d5cd8eb80cc39aae497ebfc5bcf70f-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJIMEYCIQCB71kaLR%2FgZ1JtCspQzNK5YZtEqseHU7PBT%2BaEUDoSbgIhAI5kHHgE0zuUOUgAI6rtqpNjxxwZ9ti5rhUVUulfhoeGKsEFCIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgwWOdWEdtgWbJTGlxsqlQX8D5X8YXtpfOZEkTkGJ4NOOT2E%2FMZ9y0isbXDhkfSHLormCwt2HqTBkX5kKPcJOu%2BVzp80qFy8V2lHoJOI%2FtOasYiBcqEYai75sp9W4nS6%2BBhhsnyhh7wdGXsqScfshSnLfLz7uPK1v2aBOtLrtFNTxMhtXfb4qxkyWgf3TjhOFsLFDbEOszSvX5fq6I8mM9JFzfQwwBn%2FCWJEgOhSuVrXWDWpZRXq4kQxxXENhkRw9czlRwjOuRrJiGgRP9roNk1j1yI015Xawj0oMJcpLCLMC%2FtsbVntDkGfFwkMauAtKrzlBn2wMmFxan7EXP7nH26pbzhZfCz00BaLRi5KHaKyA4AM3vf2F9IicEY%2BJEQXfOErnJoSL7mAkuvIzgUfRbP6eRSeHb0SL7XSSosFN49EBuFn6fRPkTUEfKapA59NhrAUCx0518cNDTbHyzs%2FMKxgURPYCXAXR7OUI9wOdO2Jcao%2FXfGRCoouvFjhsOXADB8PP%2B6hAdeDRwmGoxuzQdSHQgL7EYLOyFemw%2FhlvYedBdDMCoYn5G6Kgt8OOgQ4I6%2Fog%2FMuU2TbJTKWAh6NsYDWDkdIjAwzh2SalOUvSCs70MpsAk5Zm0ubwG6SGHikv6AKi867X7pY2YHaAb0TGqwxeAw40kQEB5SYC2gpKHoW%2F7EUvKTnTUqzoia7rRxRYuDUF5ttrs978T6YdUij7fhK8jCDfJ70xVDSAJolEuoVMFBJ8C9T0517loSwNJAbTUCPAikIVmEEkwMACO7sIlZAY3%2F%2BNwR9OiaCU%2B4p8aNq2hejOXLFOx0aMsxK0bKsqXRwRwItC3%2FzjPKT5%2FZVJfWmWk85RIissdbvIIK41GfzkntxLIXBh2jApAvoJOr3ohBvdF6aMPvB9rIGOrABLCP663lUKuYaYUo1UHKP5cW%2F2eH00xkhRtO0oJ7azPxl8CT3P1J3i0TIDKI%2F%2FDa45XxGP4k%2BHEdHJFi0PYE3X3iavfNm%2Bq8EJO%2F52eTraT0XUnSF7%2BYY%2FcIe8qvurhY%2B9E6bxsh17tLni%2B9I7u4Olwx57AbGurn9X95CN437577DAi6M%2FYJfquFj6946ocOQ8fsTUJpneq%2BXO0beBFxRhkJ%2BgJXoL1WaMCfXgttax8s%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240603T121213Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBG2AKAWW%2F20240603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9fd0cbda79012370ace5f0e983c8c0431209b2647539b75436e8464715dff580"
                              alt="Food"
                            />
                            <span className="text-sm mt-3 font-semibold">
                              Chicken Pozole Salad
                            </span>
                            <p className="w-full mt-3 flex justify-between">
                              <Badge
                                variant="secondary"
                                className="text-[10px] py-1"
                              >
                                <Utensils className="w-3 h-3 mr-1" />{" "}
                                lunch/dinner
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="text-[10px] py-1"
                              >
                                <ShoppingCart className="w-3 h-3 mr-1" /> 6
                                Ingredients
                              </Badge>
                            </p>
                            <a
                              className="text-sm mt-5 text-muted-foreground text-primary flex item-center hover:underline"
                              href="#"
                            >
                              Know more{" "}
                              <ExternalLink className="w-[14px] h-[14px] ml-1" />
                            </a>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-2" />
                <CarouselNext className="-right-2" />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <Card className="w-full sm:col-span-2 bg-veg-abstraction bg-no-repeat bg-contain bg-right">
          <CardHeader className="pb-3 flex">
            <CardTitle className="text-base text-primary tracking-wide">
              Discover Nutrients
            </CardTitle>
            <CardDescription className="text-primetext">
              Discover comprehensive <b>nutrient details</b> for every
              ingredient in your daily meals 🥣.
              {/* Discover recipes complete with detailed <b>nutritional information and ingredient lists</b>.  */}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline">Explore Nutrients</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
