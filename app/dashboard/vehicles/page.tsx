"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ucp/sidebar"
import { Header } from "@/components/ucp/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Car, Fuel, MapPin, Shield, Wrench, Lock, Unlock, DollarSign, Calendar } from "lucide-react"
import Image from "next/image"

const vehicles = [
  {
    id: 1,
    name: "Sultan RS",
    modelId: 560,
    plate: "LOST-001",
    fuel: 85,
    health: 92,
    location: "Idlewood, Los Santos",
    locked: true,
    insured: true,
    mileage: "12,458 km",
    purchaseDate: "2024-01-15",
    value: "$125,000",
    color: "Midnight Blue",
  },
  {
    id: 2,
    name: "Infernus",
    modelId: 411,
    plate: "LOST-002",
    fuel: 45,
    health: 100,
    location: "Vinewood, Los Santos",
    locked: false,
    insured: true,
    mileage: "3,290 km",
    purchaseDate: "2024-03-22",
    value: "$890,000",
    color: "Red",
  },
  {
    id: 3,
    name: "NRG-500",
    modelId: 522,
    plate: "LOST-003",
    fuel: 20,
    health: 68,
    location: "Downtown, Los Santos",
    locked: true,
    insured: false,
    mileage: "8,120 km",
    purchaseDate: "2023-11-08",
    value: "$45,000",
    color: "Black",
  },
  {
    id: 4,
    name: "Police Car",
    modelId: 596,
    plate: "LSPD-125",
    fuel: 100,
    health: 100,
    location: "LSPD Garage",
    locked: true,
    insured: true,
    mileage: "45,890 km",
    purchaseDate: "Faction Vehicle",
    value: "N/A",
    color: "Black & White",
    faction: true,
  },
]

export default function VehiclesPage() {
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
              <h1 className="text-xl font-bold text-foreground sm:text-2xl">My Vehicles</h1>
              <p className="text-sm text-muted-foreground sm:text-base">Manage your personal and faction vehicles</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 px-4 py-2 text-sm">
                <span className="text-muted-foreground">Total Vehicles: </span>
                <span className="font-bold text-primary">{vehicles.length}</span>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{vehicles.filter(v => !v.faction).length}</p>
                  <p className="text-sm text-muted-foreground">Personal</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{vehicles.filter(v => v.faction).length}</p>
                  <p className="text-sm text-muted-foreground">Faction</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{vehicles.filter(v => v.insured).length}</p>
                  <p className="text-sm text-muted-foreground">Insured</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20">
                  <DollarSign className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">$1.06M</p>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vehicles Grid */}
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Vehicle Image */}
                    <div className="relative flex h-32 w-full items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-4 sm:h-auto sm:w-40">
                      <div className="relative h-20 w-28 sm:h-24 sm:w-32">
                        <Image
                          src={`https://assets.open.mp/assets/images/vehiclePictures/Vehicle_${vehicle.modelId}.jpg`}
                          alt={vehicle.name}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      {vehicle.faction && (
                        <div className="absolute right-2 top-2 rounded-md bg-blue-500/80 px-2 py-0.5 text-[10px] font-bold text-white">
                          FACTION
                        </div>
                      )}
                    </div>

                    {/* Vehicle Info */}
                    <div className="flex-1 p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-card-foreground">{vehicle.name}</h3>
                          <p className="font-mono text-sm text-primary">{vehicle.plate}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {vehicle.locked ? (
                            <div className="rounded-lg bg-red-500/20 p-2">
                              <Lock className="h-4 w-4 text-red-400" />
                            </div>
                          ) : (
                            <div className="rounded-lg bg-green-500/20 p-2">
                              <Unlock className="h-4 w-4 text-green-400" />
                            </div>
                          )}
                          {vehicle.insured && (
                            <div className="rounded-lg bg-primary/20 p-2">
                              <Shield className="h-4 w-4 text-primary" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Fuel & Health */}
                      <div className="mt-3 grid gap-2">
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-yellow-400" />
                          <div className="flex-1">
                            <Progress 
                              value={vehicle.fuel} 
                              className="h-1.5" 
                            />
                          </div>
                          <span className="w-10 text-right text-xs text-muted-foreground">{vehicle.fuel}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wrench className="h-4 w-4 text-green-400" />
                          <div className="flex-1">
                            <Progress 
                              value={vehicle.health} 
                              className="h-1.5" 
                            />
                          </div>
                          <span className="w-10 text-right text-xs text-muted-foreground">{vehicle.health}%</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        <span>{vehicle.location}</span>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-3">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{vehicle.purchaseDate}</span>
                        </div>
                        <span className="text-sm font-bold text-green-400">{vehicle.value}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
