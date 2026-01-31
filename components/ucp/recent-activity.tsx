import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, DollarSign, Car, Users, Shield, MessageSquare } from "lucide-react"

const activities = [
  {
    icon: DollarSign,
    title: "Salary Received",
    description: "LSPD Paycheck - $12,500",
    time: "2 hours ago",
    color: "text-green-400",
  },
  {
    icon: Car,
    title: "Vehicle Purchase",
    description: "Bought Sultan RS for $185,000",
    time: "5 hours ago",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Arrest Made",
    description: "Arrested suspect - +150 RP",
    time: "8 hours ago",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Faction Event",
    description: "Participated in LSPD Training",
    time: "1 day ago",
    color: "text-yellow-400",
  },
  {
    icon: MessageSquare,
    title: "Support Ticket",
    description: "Ticket #4521 resolved",
    time: "2 days ago",
    color: "text-muted-foreground",
  },
]

export function RecentActivity() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-card-foreground">
          <Activity className="h-5 w-5 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-card-foreground">
                    {activity.title}
                  </p>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
