"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ucp/sidebar"
import { Header } from "@/components/ucp/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Star, Clock, Award, TrendingUp, Calendar, MapPin, Radio } from "lucide-react"
import Image from "next/image"

const factionData = {
  name: "Los Santos Police Department",
  shortName: "LSPD",
  type: "Law Enforcement",
  description: "The Los Santos Police Department is responsible for maintaining law and order in Los Santos. We protect and serve the citizens of our great city.",
  founded: "2020-01-15",
  leader: "Chief_Williams",
  totalMembers: 48,
  onlineMembers: 12,
  yourRank: 4,
  rankName: "Police Officer III",
  repPoints: 1250,
  weeklyActivity: 24,
  hq: "Pershing Square, Los Santos",
}

const ranks = [
  { rank: 1, name: "Cadet", members: 8 },
  { rank: 2, name: "Police Officer I", members: 12 },
  { rank: 3, name: "Police Officer II", members: 10 },
  { rank: 4, name: "Police Officer III", members: 8, current: true },
  { rank: 5, name: "Sergeant", members: 5 },
  { rank: 6, name: "Lieutenant", members: 3 },
  { rank: 7, name: "Captain", members: 1 },
  { rank: 8, name: "Chief of Police", members: 1 },
]

const onlineMembers = [
  { name: "Chief_Williams", rank: "Chief of Police", status: "On Duty", skinId: 280 },
  { name: "John_Doe", rank: "Police Officer III", status: "Patrolling", skinId: 280 },
  { name: "Sarah_Miller", rank: "Detective", status: "Investigating", skinId: 70 },
  { name: "Mike_Torres", rank: "Sergeant", status: "On Duty", skinId: 281 },
  { name: "James_Wilson", rank: "Police Officer II", status: "Break", skinId: 280 },
  { name: "Emily_Chen", rank: "Police Officer I", status: "On Duty", skinId: 70 },
]

const recentActivity = [
  { action: "Patrol completed", by: "John_Doe", time: "2 hours ago" },
  { action: "Arrest made - Armed Robbery", by: "Mike_Torres", time: "3 hours ago" },
  { action: "Joined faction", by: "New_Recruit", time: "1 day ago" },
  { action: "Promoted to Sergeant", by: "Mike_Torres", time: "2 days ago" },
]

export default function FactionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        mobileOpen={mobileMenuOpen} 
        onMobileClose={() => setMobileMenuOpen(false)}
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />
      
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        
        <div className="p-4 sm:p-6">
          {/* Faction Header */}
          <Card className="mb-6 overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="relative h-32 bg-gradient-to-r from-blue-600/30 via-blue-500/20 to-primary/10">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="relative -mt-12 px-4 pb-4 sm:px-6 sm:pb-6">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:gap-6">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-card bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl sm:h-24 sm:w-24">
                    <Shield className="h-10 w-10 text-white sm:h-12 sm:w-12" />
                  </div>
                  <div className="flex-1 pb-0 sm:pb-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h1 className="text-xl font-bold text-card-foreground sm:text-2xl">{factionData.name}</h1>
                      <Badge className="bg-blue-500/20 text-blue-400">{factionData.shortName}</Badge>
                      <Badge variant="outline" className="border-primary/50 text-primary bg-transparent">{factionData.type}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">{factionData.description}</p>
                  </div>
                  <div className="flex items-center gap-2 pb-0 sm:pb-2">
                    <div className="rounded-xl bg-green-500/20 px-3 py-2 text-center sm:px-4">
                      <p className="text-xl font-bold text-green-400 sm:text-2xl">{factionData.onlineMembers}</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                    <div className="rounded-xl bg-primary/20 px-3 py-2 text-center sm:px-4">
                      <p className="text-xl font-bold text-primary sm:text-2xl">{factionData.totalMembers}</p>
                      <p className="text-xs text-muted-foreground">Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Stats */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-card-foreground">Rank {factionData.yourRank}</p>
                  <p className="text-sm text-muted-foreground">{factionData.rankName}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20">
                  <Award className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-card-foreground">{factionData.repPoints}</p>
                  <p className="text-sm text-muted-foreground">Rep Points</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-card-foreground">{factionData.weeklyActivity}h</p>
                  <p className="text-sm text-muted-foreground">Weekly Activity</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-card-foreground">{factionData.hq}</p>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
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
                    <Radio className="h-5 w-5 text-green-400" />
                    Online Members
                  </span>
                  <span className="text-sm font-normal text-muted-foreground">{onlineMembers.length} online</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {onlineMembers.map((member) => (
                    <div key={member.name} className="flex items-center gap-3 rounded-xl bg-secondary/50 p-3 transition-colors hover:bg-secondary/70">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-transparent">
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
                        <p className="text-xs text-muted-foreground">{member.rank}</p>
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                        {member.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ranks & Recent Activity */}
            <div className="space-y-6">
              {/* Ranks */}
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Rank Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {ranks.slice().reverse().map((rank) => (
                      <div key={rank.rank} className={`flex items-center justify-between rounded-lg px-3 py-2 ${rank.current ? "bg-primary/20 border border-primary/30" : "bg-secondary/30"}`}>
                        <div className="flex items-center gap-2">
                          <span className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${rank.current ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                            {rank.rank}
                          </span>
                          <span className={`text-sm ${rank.current ? "font-semibold text-primary" : "text-card-foreground"}`}>{rank.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{rank.members}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <div className="flex-1">
                          <p className="text-sm text-card-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">by {activity.by} - {activity.time}</p>
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
