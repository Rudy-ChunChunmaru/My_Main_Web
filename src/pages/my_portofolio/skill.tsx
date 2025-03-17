import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const ChartDataPrograming = [
    { title: "C++", programing: 6 },
    { title: "C", programing: 3 },
    { title: "C#", programing: 3 },
    { title: "php", programing: 8 },
    { title: "python", programing:8 },
    { title: "HTML", programing: 9 },
    { title: "CSS", programing: 7 },
    { title: "Javasciprt", programing: 8 },
    { title: "TypeScript", programing: 8 },
    { title: "SQL", programing: 8 },
]

const ChartDataFramework = [
    { title: "Ardunio (Microcontroller)", framework: 6 },
    { title: "MQTT IoT (Internet of Things)", framework: 6 },
    { title: "PLC (Programable Logic Control)", framework: 6 },
    { title: "Codeigniter", framework: 6 },
    { title: "Django and Rest Framework", framework: 6 },
    { title: "Nestjs", framework: 5 },
    { title: "Nextjs", framework: 7 },
    { title: "Reactjs", framework: 7 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-3))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  programing: {
    label: "Programing",
    color: "hsl(var(--chart-3))",
  },
  framework: {
    label: "Framework",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export function Skill() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skill</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <div className="w-[95%] mx-auto">
        <CardDescription>Programing</CardDescription>
        <ChartContainer  config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={ChartDataPrograming}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="title"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="programing" type="number"  />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="programing"
              layout="vertical"
              fill="var(--color-programing)"
              radius={4}
            >
              <LabelList
                dataKey="title"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="programing"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
        </div>
        <div className="w-[95%] mx-auto">
        <CardDescription>Framework</CardDescription>
        <ChartContainer  config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={ChartDataFramework}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="title"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="framework" type="number"  />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="framework"
              layout="vertical"
              fill="var(--color-framework)"
              radius={4}
            >
              <LabelList
                dataKey="title"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="framework"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}