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
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border bg-card">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-card-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-accent">{stat.change}</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
