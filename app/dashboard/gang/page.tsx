"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ucp/sidebar"
import { Header } from "@/components/ucp/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skull, Users, MapPin, DollarSign, Target, Clock, Flame, Crown, Swords, Shield } from "lucide-react"
import Image from "next/image"

const gangData = {
  name: "Grove Street Families",
  shortName: "GSF",
  color: "#00FF00",
  territory: "Ganton, Los Santos",
  description: "Grove Street Families represent the heart of Ganton. We protect our neighborhood and look out for our own.",
  founded: "2021-03-10",
  leader: "Big_Smoke",
  totalMembers: 24,
  onlineMembers: 8,
  yourRank: 3,
  rankName: "OG",
  respect: 8500,
  territories: 5,
  rivals: ["Ballas", "Vagos"],
  allies: ["Aztecas"],
}

const gangRanks = [
  { rank: 1, name: "Recruit", members: 6 },
  { rank: 2, name: "Member", members: 8 },
  { rank: 3, name: "OG", members: 5, current: true },
  { rank: 4, name: "Shot Caller", members: 3 },
  { rank: 5, name: "Underboss", members: 1 },
  { rank: 6, name: "Boss", members: 1 },
]

const onlineMembers = [
  { name: "Big_Smoke", rank: "Boss", status: "At HQ", skinId: 270 },
  { name: "Sweet_Johnson", rank: "Underboss", status: "Patrolling", skinId: 271 },
  { name: "CJ_Grove", rank: "OG", status: "Chilling", skinId: 105 },
  { name: "Ryder_GSF", rank: "OG", status: "Dealing", skinId: 269 },
]

const territories = [
  { name: "Ganton", status: "Controlled", color: "green" },
  { name: "Idlewood", status: "Contested", color: "yellow" },
  { name: "East LS", status: "Controlled", color: "green" },
  { name: "Willowfield", status: "Under Attack", color: "red" },
  { name: "Jefferson", status: "Controlled", color: "green" },
]

const recentActivity = [
  { action: "Territory defended - Ganton", type: "defense", time: "1 hour ago" },
  { action: "Drive-by on Ballas", type: "attack", time: "3 hours ago" },
  { action: "Drug shipment completed", type: "business", time: "5 hours ago" },
  { action: "New member recruited", type: "recruit", time: "1 day ago" },
]

export default function GangPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        mobileOpen={mobileMenuOpen} 
        onMobileClose={() => setMobileMenuOpen(false)} 
      />
      
      <main className="transition-all duration-300 lg:ml-64">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        
        <div className="p-4 sm:p-6">
          {/* Gang Header */}
          <Card className="mb-6 overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="relative h-32 bg-gradient-to-r from-green-600/30 via-green-500/20 to-transparent">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="relative -mt-12 px-4 pb-4 sm:px-6 sm:pb-6">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:gap-6">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-card bg-gradient-to-br from-green-600 to-green-800 shadow-xl sm:h-24 sm:w-24">
                    <Skull className="h-10 w-10 text-white sm:h-12 sm:w-12" />
                  </div>
                  <div className="flex-1 pb-0 sm:pb-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h1 className="text-xl font-bold text-card-foreground sm:text-2xl">{gangData.name}</h1>
                      <Badge className="bg-green-500/20 text-green-400">{gangData.shortName}</Badge>
                      <Badge variant="outline" className="border-red-500/50 text-red-400 bg-transparent">Street Gang</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">{gangData.description}</p>
                  </div>
                  <div className="flex items-center gap-2 pb-0 sm:pb-2">
                    <div className="rounded-xl bg-green-500/20 px-3 py-2 text-center sm:px-4">
                      <p className="text-xl font-bold text-green-400 sm:text-2xl">{gangData.onlineMembers}</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                    <div className="rounded-xl bg-red-500/20 px-3 py-2 text-center sm:px-4">
                      <p className="text-xl font-bold text-red-400 sm:text-2xl">{gangData.territories}</p>
                      <p className="text-xs text-muted-foreground">Territories</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Gang Stats */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <Crown className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-card-foreground">Rank {gangData.yourRank}</p>
                  <p className="text-sm text-muted-foreground">{gangData.rankName}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20">
                  <Flame className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-card-foreground">{gangData.respect.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Respect</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20">
                  <Swords className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-card-foreground">{gangData.rivals.length}</p>
                  <p className="text-sm text-muted-foreground">Rival Gangs</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-card-foreground">{gangData.allies.length}</p>
                  <p className="text-sm text-muted-foreground">Allied Gangs</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Online Members */}
            <Card className="lg:col-span-2 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-400" />
                    Gang Members Online
                  </span>
                  <span className="text-sm font-normal text-muted-foreground">{onlineMembers.length} online</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {onlineMembers.map((member) => (
                    <div key={member.name} className="flex items-center gap-3 rounded-xl bg-secondary/50 p-3 transition-colors hover:bg-secondary/70">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gradient-to-br from-green-500/20 to-transparent">
                        <Image
                          src={`https://assets.open.mp/assets/images/skins/${member.skinId}.png`}
                          alt={member.name}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-green-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-card-foreground">{member.name}</p>
                        <p className="text-xs text-green-400">{member.rank}</p>
                      </div>
                      <Badge variant="outline" className="bg-secondary text-muted-foreground border-border">
                        {member.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Territory & Ranks */}
            <div className="space-y-6">
              {/* Territories */}
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-red-400" />
                    Territories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {territories.map((territory) => (
                      <div key={territory.name} className="flex items-center justify-between rounded-lg bg-secondary/30 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <MapPin className={`h-4 w-4 ${
                            territory.color === "green" ? "text-green-400" :
                            territory.color === "yellow" ? "text-yellow-400" :
                            "text-red-400"
                          }`} />
                          <span className="text-sm text-card-foreground">{territory.name}</span>
                        </div>
                        <Badge className={`${
                          territory.color === "green" ? "bg-green-500/20 text-green-400" :
                          territory.color === "yellow" ? "bg-yellow-500/20 text-yellow-400" :
                          "bg-red-500/20 text-red-400"
                        }`}>
                          {territory.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rivals & Allies */}
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Relations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-red-400">Rivals</p>
                    <div className="flex flex-wrap gap-2">
                      {gangData.rivals.map((rival) => (
                        <Badge key={rival} className="bg-red-500/20 text-red-400">
                          {rival}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-green-400">Allies</p>
                    <div className="flex flex-wrap gap-2">
                      {gangData.allies.map((ally) => (
                        <Badge key={ally} className="bg-green-500/20 text-green-400">
                          {ally}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    Gang Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3">
                        <div className={`mt-1 h-2 w-2 rounded-full ${
                          activity.type === "attack" ? "bg-red-400" :
                          activity.type === "defense" ? "bg-green-400" :
                          activity.type === "business" ? "bg-yellow-400" :
                          "bg-primary"
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm text-card-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
