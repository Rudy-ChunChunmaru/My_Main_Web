import { LabelList, Pie, PieChart } from "recharts"
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

// const chartDataLanguage = [
//     { title: "indonesia", spake: 10, readwrite:10, hear:10, fill: "var(--color-chrome)" },
//     { title: "english", spake: 6, readwrite:5, hear:6, fill: "var(--color-safari)" },
//     { title: "mandarin", spake: 5, readwrite:3, hear:4, fill: "var(--color-firefox)" },
//     { title: "japanese", spake: 1, readwrite:0, hear:2, fill: "var(--color-edge)" },
// ]

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
]
const chartConfig = {
  indonesia: {
    label: "Indonesia",
    color: "hsl(var(--chart-1))",
  },
  english: {
    label: "English",
    color: "hsl(var(--chart-2))",
  },
  mandarin: {
    label: "Mandarin",
    color: "hsl(var(--chart-3))",
  },
  japanese: {
    label: "Japanese",
    color: "hsl(var(--chart-4))",
  },
  visitors: {
    label: "Visitors",
  },
  spake: {
    label: "Spake",
  },
  readwrite: {
    label: "Read and Write",
  },
  hear: {
    label: "Hear",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig
export function Language() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Language</CardTitle>
        <CardDescription>Counter</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
