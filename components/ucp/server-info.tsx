import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, Clock, TrendingUp, Calendar } from "lucide-react"

export function ServerInfo() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-card-foreground">
          <Globe className="h-5 w-5 text-primary" />
          Server Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-lg bg-green-500/10 p-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
            <span className="font-medium text-green-400">Server Online</span>
          </div>
          <span className="text-sm text-muted-foreground">samp.lostrp.com:7777</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-secondary/50 p-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Players</span>
            </div>
            <p className="mt-1 text-xl font-bold text-card-foreground">247/500</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">Uptime</span>
            </div>
            <p className="mt-1 text-xl font-bold text-card-foreground">99.8%</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-sm text-muted-foreground">Peak Today</span>
            </div>
            <p className="mt-1 text-xl font-bold text-card-foreground">389</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-muted-foreground">Game Time</span>
            </div>
            <p className="mt-1 text-xl font-bold text-card-foreground">18:45</p>
          </div>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
          <p className="text-xs font-medium text-primary">Upcoming Event</p>
          <p className="mt-1 text-sm font-medium text-card-foreground">
            Street Racing Championship
          </p>
          <p className="text-xs text-muted-foreground">Tomorrow at 20:00 UTC</p>
        </div>
      </CardContent>
    </Card>
  )
}
