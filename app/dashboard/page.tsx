"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ucp/sidebar"
import { Header } from "@/components/ucp/header"
import { StatsCards } from "@/components/ucp/stats-cards"
import { CharacterCard } from "@/components/ucp/character-card"
import { FactionPanel } from "@/components/ucp/faction-panel"
import { RecentActivity } from "@/components/ucp/recent-activity"
import { ServerInfo } from "@/components/ucp/server-info"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Building2, Users, Skull, ArrowRight, ShoppingBag } from "lucide-react"
import Link from "next/link"

const quickStats = [
  { label: "Vehicles", value: "4", icon: Car, href: "/dashboard/vehicles", color: "text-blue-400", bg: "bg-blue-500/20" },
  { label: "Properties", value: "4", icon: Building2, href: "/dashboard/properties", color: "text-green-400", bg: "bg-green-500/20" },
  { label: "Store", value: "Shop", icon: ShoppingBag, href: "/dashboard/store", color: "text-purple-400", bg: "bg-purple-500/20" },
  { label: "Faction", value: "LSPD", icon: Users, href: "/dashboard/faction", color: "text-primary", bg: "bg-primary/20" },
]

export default function UCPDashboard() {
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
          {/* Welcome Banner */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  Welcome back, John_Doe!
                </h2>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                  {"Here's what's happening with your account today."}
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <Button className="rounded-xl bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90">
                  Connect to Server
                </Button>
                <Button variant="outline" className="rounded-xl bg-transparent">
                  View Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <StatsCards />

          {/* Quick Links */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {quickStats.map((stat) => (
              <Link key={stat.label} href={stat.href}>
                <Card className="group cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                  <CardContent className="flex items-center justify-between p-3 sm:p-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${stat.bg}`}>
                        <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                        <p className={`text-base font-bold sm:text-lg ${stat.color}`}>{stat.value}</p>
                      </div>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:block" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* Left Column - Takes 2 cols on large screens */}
            <div className="space-y-6 lg:col-span-2">
              <CharacterCard />
              <RecentActivity />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ServerInfo />
              <FactionPanel />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 border-t border-border/50 pt-6 text-center">
            <p className="text-xs text-muted-foreground sm:text-sm">
              Lost Roleplay UCP v2.0 | SA-MP Server | samp.lostrp.com:7777
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground sm:gap-4">
              <a href="#" className="transition-colors hover:text-foreground">
                Rules
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="transition-colors hover:text-foreground">
                Forums
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="transition-colors hover:text-foreground">
                Discord
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="transition-colors hover:text-foreground">
                Support
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
