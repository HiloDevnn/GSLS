"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Heart, Shield, MapPin, Briefcase, DollarSign, Clock, Users, Skull } from "lucide-react"
import Image from "next/image"

const activeCharacter = {
  name: "John_Doe",
  level: 45,
  health: 85,
  armor: 60,
  money: "$1,245,890",
  bank: "$5,890,000",
  location: "Los Santos Police Department",
  job: "Police Officer",
  faction: "LSPD",
  factionType: "legal",
  gang: null,
  playTime: "458 hours",
  skinId: 280,
}

export function CharacterCard() {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="border-b border-border/50 pb-4">
        <CardTitle className="flex items-center justify-between text-lg font-semibold text-card-foreground">
          <span>Active Character</span>
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
            Online
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Skin Image Section */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-6 md:w-48">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl" />
              <div className="relative h-40 w-32 overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-b from-primary/10 to-transparent shadow-xl">
                <Image
                  src={`https://assets.open.mp/assets/images/skins/${activeCharacter.skinId}.png`}
                  alt={activeCharacter.name}
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                LVL {activeCharacter.level}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 p-6">
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-2xl font-bold text-card-foreground">{activeCharacter.name}</h3>
              {activeCharacter.faction && (
                <span className={`rounded-lg px-2 py-1 text-xs font-semibold ${activeCharacter.factionType === "legal" ? "bg-blue-500/20 text-blue-400" : "bg-red-500/20 text-red-400"}`}>
                  {activeCharacter.faction}
                </span>
              )}
            </div>

            {/* Health & Armor */}
            <div className="mb-4 grid gap-3">
              <div className="flex items-center gap-3">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="w-16 text-sm text-muted-foreground">Health</span>
                <div className="flex-1">
                  <Progress value={activeCharacter.health} className="h-2 bg-red-950" />
                </div>
                <span className="w-10 text-right text-sm font-medium text-red-400">{activeCharacter.health}%</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-primary" />
                <span className="w-16 text-sm text-muted-foreground">Armor</span>
                <div className="flex-1">
                  <Progress value={activeCharacter.armor} className="h-2 bg-primary/20" />
                </div>
                <span className="w-10 text-right text-sm font-medium text-primary">{activeCharacter.armor}%</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-secondary/50 p-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4 text-green-400" />
                  <span className="text-xs">Cash</span>
                </div>
                <p className="mt-1 text-lg font-bold text-green-400">{activeCharacter.money}</p>
              </div>
              <div className="rounded-xl bg-secondary/50 p-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs">Bank</span>
                </div>
                <p className="mt-1 text-lg font-bold text-yellow-400">{activeCharacter.bank}</p>
              </div>
              <div className="rounded-xl bg-secondary/50 p-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span className="text-xs">Job</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-card-foreground">{activeCharacter.job}</p>
              </div>
              <div className="rounded-xl bg-secondary/50 p-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span className="text-xs">Play Time</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-card-foreground">{activeCharacter.playTime}</p>
              </div>
            </div>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-secondary/30 px-4 py-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Last Location:</span>
              <span className="text-sm font-medium text-card-foreground">{activeCharacter.location}</span>
            </div>

            {/* Faction & Gang */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-blue-300">Faction</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-blue-400">{activeCharacter.faction || "None"}</p>
              </div>
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
                <div className="flex items-center gap-2">
                  <Skull className="h-4 w-4 text-red-400" />
                  <span className="text-xs text-red-300">Gang</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-red-400">{activeCharacter.gang || "None"}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
