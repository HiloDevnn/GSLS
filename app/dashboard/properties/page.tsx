"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ucp/sidebar"
import { Header } from "@/components/ucp/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, Store, Warehouse, MapPin, DollarSign, Lock, Key, Users, Calendar, TrendingUp } from "lucide-react"

const properties = [
  {
    id: 1,
    name: "Luxury Mansion",
    type: "house",
    address: "Vinewood Hills, Los Santos",
    price: "$2,500,000",
    rentPrice: null,
    interior: "High-End House",
    slots: 4,
    locked: true,
    purchaseDate: "2024-01-20",
    icon: Home,
  },
  {
    id: 2,
    name: "Downtown Apartment",
    type: "apartment",
    address: "Downtown, Los Santos",
    price: "$450,000",
    rentPrice: "$5,000/week",
    interior: "Medium Apartment",
    slots: 2,
    locked: true,
    purchaseDate: "2024-02-15",
    icon: Building2,
  },
  {
    id: 3,
    name: "24/7 Store",
    type: "business",
    address: "Idlewood, Los Santos",
    price: "$750,000",
    rentPrice: null,
    interior: "24/7 Store",
    slots: 0,
    locked: false,
    purchaseDate: "2023-12-01",
    income: "$12,500/day",
    icon: Store,
  },
  {
    id: 4,
    name: "Warehouse Storage",
    type: "warehouse",
    address: "Commerce, Los Santos",
    price: "$320,000",
    rentPrice: null,
    interior: "Large Warehouse",
    slots: 100,
    locked: true,
    purchaseDate: "2024-03-10",
    icon: Warehouse,
  },
]

const propertyTypes = [
  { type: "house", label: "Houses", count: 1, color: "text-green-400", bg: "bg-green-500/20" },
  { type: "apartment", label: "Apartments", count: 1, color: "text-blue-400", bg: "bg-blue-500/20" },
  { type: "business", label: "Businesses", count: 1, color: "text-yellow-400", bg: "bg-yellow-500/20" },
  { type: "warehouse", label: "Warehouses", count: 1, color: "text-purple-400", bg: "bg-purple-500/20" },
]

export default function PropertiesPage() {
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
      
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}>
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        
        <div className="p-4 sm:p-6">
          {/* Page Header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground sm:text-2xl">My Properties</h1>
              <p className="text-sm text-muted-foreground sm:text-base">Manage your houses, apartments, and businesses</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-500/10 px-4 py-2 text-sm">
                <span className="text-muted-foreground">Total Value: </span>
                <span className="font-bold text-green-400">$4.02M</span>
              </div>
            </div>
          </div>

          {/* Property Type Stats */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {propertyTypes.map((type) => (
              <Card key={type.type} className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${type.bg}`}>
                    {type.type === "house" && <Home className={`h-6 w-6 ${type.color}`} />}
                    {type.type === "apartment" && <Building2 className={`h-6 w-6 ${type.color}`} />}
                    {type.type === "business" && <Store className={`h-6 w-6 ${type.color}`} />}
                    {type.type === "warehouse" && <Warehouse className={`h-6 w-6 ${type.color}`} />}
                  </div>
                  <div>
                    <p className={`text-2xl font-bold ${type.color}`}>{type.count}</p>
                    <p className="text-sm text-muted-foreground">{type.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            {properties.map((property) => {
              const IconComponent = property.icon
              return (
                <Card key={property.id} className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      {/* Property Icon Section */}
                      <div className={`relative flex w-full flex-col items-center justify-center gap-2 p-4 sm:w-32 sm:p-6 ${
                        property.type === "house" ? "bg-gradient-to-br from-green-500/20 to-green-500/5" :
                        property.type === "apartment" ? "bg-gradient-to-br from-blue-500/20 to-blue-500/5" :
                        property.type === "business" ? "bg-gradient-to-br from-yellow-500/20 to-yellow-500/5" :
                        "bg-gradient-to-br from-purple-500/20 to-purple-500/5"
                      }`}>
                        <IconComponent className={`h-10 w-10 sm:h-12 sm:w-12 ${
                          property.type === "house" ? "text-green-400" :
                          property.type === "apartment" ? "text-blue-400" :
                          property.type === "business" ? "text-yellow-400" :
                          "text-purple-400"
                        }`} />
                        <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${
                          property.type === "house" ? "bg-green-500/30 text-green-300" :
                          property.type === "apartment" ? "bg-blue-500/30 text-blue-300" :
                          property.type === "business" ? "bg-yellow-500/30 text-yellow-300" :
                          "bg-purple-500/30 text-purple-300"
                        }`}>
                          {property.type}
                        </span>
                      </div>

                      {/* Property Info */}
                      <div className="flex-1 p-3 sm:p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-card-foreground">{property.name}</h3>
                            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-3.5 w-3.5 text-primary" />
                              <span>{property.address}</span>
                            </div>
                          </div>
                          <div className={`rounded-lg p-2 ${property.locked ? "bg-green-500/20" : "bg-red-500/20"}`}>
                            {property.locked ? (
                              <Lock className="h-4 w-4 text-green-400" />
                            ) : (
                              <Key className="h-4 w-4 text-red-400" />
                            )}
                          </div>
                        </div>

                        {/* Property Details */}
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="rounded-lg bg-secondary/50 p-2">
                            <p className="text-xs text-muted-foreground">Interior</p>
                            <p className="text-sm font-medium text-card-foreground">{property.interior}</p>
                          </div>
                          {property.slots > 0 && (
                            <div className="rounded-lg bg-secondary/50 p-2">
                              <p className="text-xs text-muted-foreground">Storage Slots</p>
                              <div className="flex items-center gap-1">
                                <Users className="h-3.5 w-3.5 text-primary" />
                                <span className="text-sm font-medium text-card-foreground">{property.slots}</span>
                              </div>
                            </div>
                          )}
                          {property.income && (
                            <div className="rounded-lg bg-green-500/10 p-2">
                              <p className="text-xs text-green-300">Daily Income</p>
                              <div className="flex items-center gap-1">
                                <TrendingUp className="h-3.5 w-3.5 text-green-400" />
                                <span className="text-sm font-bold text-green-400">{property.income}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{property.purchaseDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4 text-green-400" />
                            <span className="text-sm font-bold text-green-400">{property.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
