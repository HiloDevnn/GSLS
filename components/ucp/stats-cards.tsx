import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Clock, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Total Money",
    value: "$1,245,890",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up",
  },
  {
    label: "Play Time",
    value: "847 Hours",
    change: "+24h this week",
    icon: Clock,
    trend: "up",
  },
  {
    label: "Respect Points",
    value: "15,420",
    change: "+580 points",
    icon: Award,
    trend: "up",
  },
  {
    label: "Level",
    value: "Level 45",
    change: "85% to next",
    icon: TrendingUp,
    trend: "up",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border bg-card">
          <CardContent className="p-3 sm:p-5">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                <p className="mt-1 truncate text-base font-bold text-card-foreground sm:text-xl lg:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 truncate text-[10px] text-accent sm:text-xs">{stat.change}</p>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-10 sm:w-10">
                <stat.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
