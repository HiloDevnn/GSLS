"use client"

import { Bell, Search, Globe, Users, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-6">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        <h1 className="text-lg font-semibold text-foreground sm:text-xl">Dashboard</h1>
        <div className="hidden items-center gap-2 rounded-lg bg-accent/50 px-3 py-1.5 text-sm lg:flex">
          <Globe className="h-4 w-4 text-accent" />
          <span className="text-muted-foreground">Server:</span>
          <span className="font-medium text-foreground">Lost Roleplay</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="relative hidden xl:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 border-border bg-secondary pl-9"
          />
        </div>

        {/* Server Status */}
        <div className="hidden items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 sm:flex">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">247/500</span>
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            3
          </span>
        </Button>
      </div>
    </header>
  )
}
