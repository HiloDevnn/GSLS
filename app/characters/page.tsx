"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  User,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Plus,
  Play,
  Trash2,
  Shield,
  Heart,
  LogOut,
  Settings,
  Gamepad2,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

interface Character {
  id: number
  name: string
  level: number
  money: number
  bank: number
  playTime: string
  lastLocation: string
  job: string
  faction: string | null
  factionRank: string | null
  health: number
  armor: number
  skin: number
  lastPlayed: string
  isOnline: boolean
}

const characters: Character[] = [
  {
    id: 1,
    name: "Marcus_Johnson",
    level: 24,
    money: 45230,
    bank: 892450,
    playTime: "156h 32m",
    lastLocation: "Los Santos, Idlewood",
    job: "Mechanic",
    faction: "Los Santos Police Department",
    factionRank: "Officer II",
    health: 100,
    armor: 50,
    skin: 287,
    lastPlayed: "2 hours ago",
    isOnline: false,
  },
  {
    id: 2,
    name: "Tony_Moretti",
    level: 12,
    money: 12840,
    bank: 156200,
    playTime: "48h 15m",
    lastLocation: "Los Santos, Vinewood",
    job: "Taxi Driver",
    faction: null,
    factionRank: null,
    health: 85,
    armor: 0,
    skin: 19,
    lastPlayed: "3 days ago",
    isOnline: false,
  },
  {
    id: 3,
    name: "Elena_Rodriguez",
    level: 8,
    money: 5620,
    bank: 34500,
    playTime: "22h 45m",
    lastLocation: "Los Santos, Market",
    job: "Unemployed",
    faction: "Los Santos Medical Services",
    factionRank: "Paramedic",
    health: 100,
    armor: 0,
    skin: 93,
    lastPlayed: "1 week ago",
    isOnline: false,
  },
]

const MAX_CHARACTERS = 5

export default function CharacterSelectPage() {
  const router = useRouter()
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)
  const [hoveredCharacter, setHoveredCharacter] = useState<number | null>(null)

  const handlePlay = () => {
    if (selectedCharacter !== null) {
      router.push("/dashboard")
    }
  }

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[180px] animate-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Background Image */}
      <div className="fixed inset-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Los Santos" 
          fill 
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="glass-strong rounded-2xl px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/40 blur-xl rounded-xl" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
                    <Gamepad2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Lost Roleplay</h1>
                  <p className="text-xs text-muted-foreground">Character Selection</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-white/5">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground hover:bg-white/5"
                  onClick={() => router.push("/")}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Choose Your Identity</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground">Select Character</h2>
          <p className="text-muted-foreground text-lg">
            Choose a character to enter Los Santos or create a new one
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          {/* Character Cards */}
          {characters.map((char) => (
            <div
              key={char.id}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ${
                selectedCharacter === char.id
                  ? "glass-strong ring-2 ring-primary shadow-2xl shadow-primary/20 scale-[1.02]"
                  : "glass hover:bg-white/10 hover:scale-[1.01]"
              }`}
              onClick={() => setSelectedCharacter(char.id)}
              onMouseEnter={() => setHoveredCharacter(char.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
            >
              {/* Selection Indicator */}
              {selectedCharacter === char.id && (
                <div className="absolute right-4 top-4 z-10">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                    <ChevronRight className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              )}

              {/* Character Header */}
              <div className="relative border-b border-white/5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-5">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-white/5 ring-2 ring-white/10">
                      <User className="h-9 w-9 text-muted-foreground" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30">
                      {char.level}
                    </div>
                  </div>

                  {/* Name & Faction */}
                  <div className="flex-1 pt-1">
                    <h3 className="mb-2 text-xl font-bold text-foreground">{char.name}</h3>
                    {char.faction ? (
                      <Badge className="bg-primary/20 text-primary border-0 font-medium">
                        {char.faction}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-muted-foreground border-white/10">
                        Civilian
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Character Stats */}
              <div className="p-5">
                {/* Health & Armor Bars */}
                <div className="mb-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <Heart className="h-4 w-4 text-red-500" />
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500"
                        style={{ width: `${char.health}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-xs font-medium text-muted-foreground">{char.health}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"
                        style={{ width: `${char.armor}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-xs font-medium text-muted-foreground">{char.armor}</span>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: DollarSign, label: 'Cash', value: formatMoney(char.money), highlight: true },
                    { icon: DollarSign, label: 'Bank', value: formatMoney(char.bank) },
                    { icon: Clock, label: 'Play Time', value: char.playTime },
                    { icon: Briefcase, label: 'Job', value: char.job },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/5 p-3 transition-colors hover:bg-white/10">
                      <div className="mb-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <item.icon className="h-3 w-3" />
                        {item.label}
                      </div>
                      <p className={`font-semibold truncate ${item.highlight ? 'text-emerald-500' : 'text-foreground'}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground truncate">{char.lastLocation}</span>
                </div>

                {/* Last Played */}
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Last played: {char.lastPlayed}
                </p>
              </div>

              {/* Hover Actions */}
              <div
                className={`absolute inset-x-0 bottom-0 flex items-center justify-center gap-3 bg-gradient-to-t from-background via-background/98 to-transparent px-5 pb-5 pt-12 transition-all duration-300 ${
                  hoveredCharacter === char.id || selectedCharacter === char.id
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="h-10 border-red-500/30 text-red-500 bg-red-500/10 hover:bg-red-500/20 hover:border-red-500/50"
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
                <Button
                  size="sm"
                  className="h-10 bg-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedCharacter(char.id)
                    handlePlay()
                  }}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Play Now
                </Button>
              </div>
            </div>
          ))}

          {/* Create New Character Card */}
          {characters.length < MAX_CHARACTERS && (
            <div
              className="group flex min-h-[480px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-primary/40 hover:bg-white/5"
              onClick={() => router.push("/characters/create")}
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                <Plus className="h-12 w-12 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Create New Character</h3>
              <p className="text-sm text-muted-foreground">
                {characters.length}/{MAX_CHARACTERS} slots used
              </p>
            </div>
          )}
        </div>

        {/* Play Button */}
        {selectedCharacter !== null && (
          <div className="flex justify-center animate-slide-up">
            <Button
              size="lg"
              className="h-16 min-w-[320px] rounded-2xl bg-primary text-lg font-semibold shadow-2xl shadow-primary/40 hover:shadow-primary/50 transition-all hover:scale-105"
              onClick={handlePlay}
            >
              <Play className="mr-3 h-6 w-6" />
              Enter Los Santos
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-auto">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Lost Roleplay - San Andreas Multiplayer
          </p>
        </div>
      </footer>
    </div>
  )
}
