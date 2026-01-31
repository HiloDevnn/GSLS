"use client"

import { cn } from "@/lib/utils"
import {
  Home,
  Users,
  Car,
  Building2,
  FileText,
  Settings,
  LogOut,
  Shield,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Skull,
  ShoppingBag,
  X,
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Car, label: "Vehicles", href: "/dashboard/vehicles" },
  { icon: Building2, label: "Properties", href: "/dashboard/properties" },
  { icon: ShoppingBag, label: "Store", href: "/dashboard/store" },
  { icon: Users, label: "Faction", href: "/dashboard/faction" },
  { icon: Skull, label: "Gang", href: "/dashboard/gang" },
  { icon: Shield, label: "Admin Panel", href: "/dashboard/admin", adminOnly: true },
  { icon: MessageSquare, label: "Support", href: "/dashboard/support" },
  { icon: FileText, label: "Logs", href: "/dashboard/logs" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

interface SidebarProps {
  mobileOpen?: boolean
  onMobileClose?: () => void
}

export function Sidebar({ mobileOpen = false, onMobileClose }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Close mobile sidebar on route change
  useEffect(() => {
    if (onMobileClose) {
      onMobileClose()
    }
  }, [pathname])

  const handleLogout = () => {
    router.push("/characters")
  }

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}
      
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-border/50 bg-sidebar/95 backdrop-blur-xl transition-all duration-300",
          // Desktop styles
          "hidden lg:flex",
          collapsed ? "lg:w-16" : "lg:w-64",
          // Mobile styles - shown when mobileOpen is true
          mobileOpen && "flex w-72"
        )}
      >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border/50 px-4">
        {(!collapsed || mobileOpen) && (
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/25">
              <span className="text-sm font-black text-primary-foreground">LR</span>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-sidebar bg-green-500" />
            </div>
            <div>
              <span className="text-lg font-bold text-sidebar-foreground">Lost RP</span>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">User Panel</p>
            </div>
          </Link>
        )}
        {collapsed && !mobileOpen && (
          <Link href="/dashboard" className="mx-auto">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/25">
              <span className="text-sm font-black text-primary-foreground">LR</span>
            </div>
          </Link>
        )}
        {/* Mobile Close Button */}
        {mobileOpen && (
          <button
            onClick={onMobileClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                    collapsed && !mobileOpen && "justify-center px-2"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-primary-foreground" />
                  )}
                  <item.icon className={cn("h-5 w-5 shrink-0 transition-transform duration-200", !isActive && "group-hover:scale-110")} />
                  {(!collapsed || mobileOpen) && <span>{item.label}</span>}
                  {item.adminOnly && (!collapsed || mobileOpen) && (
                    <span className="ml-auto rounded-md bg-yellow-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-yellow-400">
                      ADMIN
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="border-t border-sidebar-border/50 p-3">
        <div
          className={cn(
            "flex items-center gap-3 rounded-xl bg-gradient-to-r from-sidebar-accent to-transparent p-3",
            collapsed && !mobileOpen && "justify-center bg-sidebar-accent p-2"
          )}
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/80 to-primary text-sm font-bold text-primary-foreground">
            JD
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-sidebar bg-green-500" />
          </div>
          {(!collapsed || mobileOpen) && (
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-semibold text-sidebar-foreground">
                John_Doe
              </p>
              <p className="truncate text-xs text-muted-foreground">Admin Level 5</p>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className={cn(
            "mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-300",
            collapsed && !mobileOpen && "justify-center px-2"
          )}
        >
          <LogOut className="h-5 w-5" />
          {(!collapsed || mobileOpen) && <span>Logout</span>}
        </button>
      </div>

      {/* Collapse Toggle - hidden on mobile */}
      {!mobileOpen && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 hidden h-6 w-6 items-center justify-center rounded-full border border-border/50 bg-card text-muted-foreground shadow-lg transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-primary-foreground lg:flex"
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </button>
      )}
    </aside>
    </>
  )
}
  )
}
