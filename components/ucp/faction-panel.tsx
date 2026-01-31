import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Star, Clock, Award } from "lucide-react"

const members = [
  { name: "Chief_Williams", rank: "Chief of Police", online: true },
  { name: "John_Doe", rank: "Police Officer", online: true },
  { name: "Sarah_Miller", rank: "Detective", online: false },
  { name: "Mike_Torres", rank: "Sergeant", online: true },
]

export function FactionPanel() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold text-card-foreground">
            <Shield className="h-5 w-5 text-primary" />
            Faction Info
          </CardTitle>
          <Badge className="bg-primary/10 text-primary">LSPD</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Faction Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-secondary/50 p-3 text-center">
            <Users className="mx-auto h-5 w-5 text-primary" />
            <p className="mt-1 text-lg font-bold text-card-foreground">48</p>
            <p className="text-xs text-muted-foreground">Members</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-3 text-center">
            <Star className="mx-auto h-5 w-5 text-yellow-400" />
            <p className="mt-1 text-lg font-bold text-card-foreground">Rank 4</p>
            <p className="text-xs text-muted-foreground">Your Rank</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-3 text-center">
            <Award className="mx-auto h-5 w-5 text-accent" />
            <p className="mt-1 text-lg font-bold text-card-foreground">1,250</p>
            <p className="text-xs text-muted-foreground">Rep Points</p>
          </div>
        </div>

        {/* Online Members */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-sm font-medium text-card-foreground">Online Members</h4>
            <span className="text-xs text-muted-foreground">
              {members.filter((m) => m.online).length}/{members.length} online
            </span>
          </div>
          <div className="space-y-2">
            {members.map((member) => (
              <div
                key={member.name}
                className="flex items-center justify-between rounded-lg bg-secondary/30 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      member.online ? "bg-green-500" : "bg-muted-foreground"
                    }`}
                  />
                  <span className="text-sm text-card-foreground">{member.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{member.rank}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-lg border border-border/50 bg-secondary/20 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>Last activity: Patrol completed - 2 hours ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
