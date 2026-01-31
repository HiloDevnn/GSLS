"use client"

import { Sidebar } from "@/components/ucp/sidebar"
import { Header } from "@/components/ucp/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, Users, AlertTriangle, Ban, Search, Clock, 
  FileText, Settings, Database, Activity, Eye, Trash2,
  UserX, MessageSquare, Server, TrendingUp
} from "lucide-react"
import { useState } from "react"

const stats = {
  totalPlayers: 1245,
  onlinePlayers: 89,
  totalBans: 342,
  pendingReports: 12,
  activeAdmins: 5,
  serverUptime: "99.8%",
}

const recentBans = [
  { player: "Cheater_123", admin: "Admin_John", reason: "Aimbot", date: "2024-01-15", duration: "Permanent" },
  { player: "Toxic_Player", admin: "Admin_Sarah", reason: "Harassment", date: "2024-01-14", duration: "7 days" },
  { player: "Money_Hacker", admin: "Admin_Mike", reason: "Money hack", date: "2024-01-13", duration: "Permanent" },
  { player: "Speed_Demon", admin: "Admin_John", reason: "Speed hack", date: "2024-01-12", duration: "30 days" },
]

const pendingReports = [
  { id: 1, reporter: "Player_One", reported: "Suspect_User", reason: "DM without reason", date: "10 min ago", priority: "high" },
  { id: 2, reporter: "New_Player", reported: "Old_Timer", reason: "Metagaming", date: "25 min ago", priority: "medium" },
  { id: 3, reporter: "Civilian_RP", reported: "Gang_Member", reason: "RDM", date: "1 hour ago", priority: "high" },
  { id: 4, reporter: "Trucker_Joe", reported: "Racer_Fast", reason: "Vehicle DM", date: "2 hours ago", priority: "low" },
]

const onlineAdmins = [
  { name: "Admin_John", level: 5, status: "Available", handling: 0 },
  { name: "Admin_Sarah", level: 4, status: "Busy", handling: 2 },
  { name: "Admin_Mike", level: 4, status: "Available", handling: 1 },
  { name: "Mod_Lisa", level: 2, status: "AFK", handling: 0 },
  { name: "Mod_Tom", level: 2, status: "Available", handling: 1 },
]

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("")
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
          {/* Admin Header */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-foreground sm:text-2xl">Admin Panel</h1>
                <Badge className="bg-yellow-500/20 text-yellow-400">Level 5</Badge>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">Server management and moderation tools</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search player..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 bg-card border-border/50 sm:w-64"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Server className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Server Settings</span>
                <span className="sm:hidden">Settings</span>
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Users className="mb-2 h-6 w-6 text-primary" />
                <p className="text-2xl font-bold text-card-foreground">{stats.totalPlayers}</p>
                <p className="text-xs text-muted-foreground">Total Players</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Activity className="mb-2 h-6 w-6 text-green-400" />
                <p className="text-2xl font-bold text-green-400">{stats.onlinePlayers}</p>
                <p className="text-xs text-muted-foreground">Online Now</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Ban className="mb-2 h-6 w-6 text-red-400" />
                <p className="text-2xl font-bold text-red-400">{stats.totalBans}</p>
                <p className="text-xs text-muted-foreground">Total Bans</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <AlertTriangle className="mb-2 h-6 w-6 text-yellow-400" />
                <p className="text-2xl font-bold text-yellow-400">{stats.pendingReports}</p>
                <p className="text-xs text-muted-foreground">Pending Reports</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Shield className="mb-2 h-6 w-6 text-blue-400" />
                <p className="text-2xl font-bold text-blue-400">{stats.activeAdmins}</p>
                <p className="text-xs text-muted-foreground">Active Admins</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <TrendingUp className="mb-2 h-6 w-6 text-green-400" />
                <p className="text-2xl font-bold text-green-400">{stats.serverUptime}</p>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent border-border/50 hover:bg-primary/10 hover:border-primary/50">
              <UserX className="h-6 w-6 text-red-400" />
              <span>Ban Player</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent border-border/50 hover:bg-primary/10 hover:border-primary/50">
              <Eye className="h-6 w-6 text-blue-400" />
              <span>Spectate</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent border-border/50 hover:bg-primary/10 hover:border-primary/50">
              <MessageSquare className="h-6 w-6 text-green-400" />
              <span>Announce</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent border-border/50 hover:bg-primary/10 hover:border-primary/50">
              <Database className="h-6 w-6 text-purple-400" />
              <span>Database</span>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Pending Reports */}
            <Card className="lg:col-span-2 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    Pending Reports
                  </span>
                  <Badge className="bg-yellow-500/20 text-yellow-400">{pendingReports.length} pending</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingReports.map((report) => (
                    <div key={report.id} className="flex items-center gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-secondary/70">
                      <div className={`h-3 w-3 rounded-full ${
                        report.priority === "high" ? "bg-red-400" :
                        report.priority === "medium" ? "bg-yellow-400" :
                        "bg-green-400"
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-card-foreground">{report.reported}</span>
                          <span className="text-muted-foreground">reported by</span>
                          <span className="text-primary">{report.reporter}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{report.reason}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{report.date}</p>
                        <div className="mt-2 flex gap-2">
                          <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                            <Eye className="mr-1 h-3 w-3" />
                            View
                          </Button>
                          <Button size="sm" className="h-7 text-xs bg-primary">
                            Handle
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Online Admins */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-blue-400" />
                  Online Staff
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {onlineAdmins.map((admin) => (
                    <div key={admin.name} className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                        <Shield className="h-5 w-5 text-primary" />
                        <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card ${
                          admin.status === "Available" ? "bg-green-500" :
                          admin.status === "Busy" ? "bg-yellow-500" :
                          "bg-gray-500"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-card-foreground">{admin.name}</p>
                        <p className="text-xs text-muted-foreground">Level {admin.level}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className={`text-xs bg-transparent ${
                          admin.status === "Available" ? "text-green-400 border-green-500/30" :
                          admin.status === "Busy" ? "text-yellow-400 border-yellow-500/30" :
                          "text-gray-400 border-gray-500/30"
                        }`}>
                          {admin.status}
                        </Badge>
                        {admin.handling > 0 && (
                          <p className="mt-1 text-xs text-muted-foreground">Handling {admin.handling}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Bans */}
            <Card className="lg:col-span-3 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center gap-2">
                    <Ban className="h-5 w-5 text-red-400" />
                    Recent Bans
                  </span>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <FileText className="mr-2 h-4 w-4" />
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Player</th>
                        <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Admin</th>
                        <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Reason</th>
                        <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                        <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Duration</th>
                        <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBans.map((ban, index) => (
                        <tr key={index} className="border-b border-border/30">
                          <td className="py-3">
                            <span className="font-medium text-card-foreground">{ban.player}</span>
                          </td>
                          <td className="py-3">
                            <span className="text-primary">{ban.admin}</span>
                          </td>
                          <td className="py-3">
                            <span className="text-muted-foreground">{ban.reason}</span>
                          </td>
                          <td className="py-3">
                            <span className="text-muted-foreground">{ban.date}</span>
                          </td>
                          <td className="py-3">
                            <Badge className={ban.duration === "Permanent" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}>
                              {ban.duration}
                            </Badge>
                          </td>
                          <td className="py-3 text-right">
                            <Button size="sm" variant="ghost" className="h-7 text-xs text-muted-foreground hover:text-red-400">
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
