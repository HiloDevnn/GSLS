"use client"

import { Button } from "@/components/ui/button"
import { 
  Users, 
  Shield, 
  Car, 
  Building2, 
  Gamepad2, 
  ChevronRight,
  Play,
  Copy,
  Check,
  Zap,
  Globe,
  MessageSquare,
  Sparkles,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

const features = [
  {
    icon: Users,
    title: "Roleplay Community",
    description: "Deep character development with thousands of active players"
  },
  {
    icon: Shield,
    title: "Active Factions",
    description: "LSPD, FBI, Government, Gangs and more await you"
  },
  {
    icon: Car,
    title: "Vehicle System",
    description: "Hundreds of customizable vehicles with realistic mechanics"
  },
  {
    icon: Building2,
    title: "Property Empire",
    description: "Own houses, businesses, and build your empire"
  },
  {
    icon: Zap,
    title: "Custom Scripts",
    description: "Unique features you won't find anywhere else"
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Dedicated staff team always ready to help"
  }
]

const stats = [
  { value: "15K+", label: "Players" },
  { value: "500+", label: "Peak Online" },
  { value: "99.9%", label: "Uptime" },
  { value: "5+", label: "Years" }
]

export default function LandingPage() {
  const [copied, setCopied] = useState(false)
  const [playersOnline, setPlayersOnline] = useState(247)
  const serverIP = "samp.lostrp.com:7777"

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayersOnline(prev => Math.max(200, Math.min(350, prev + Math.floor(Math.random() * 5) - 2)))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full">
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
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-foreground">LOST</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Roleplay</span>
                </div>
              </div>
              
              <div className="hidden items-center gap-1 lg:flex">
                {['Features', 'Statistics', 'Rules', 'Forums', 'Discord'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground rounded-lg hover:bg-white/5"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link href="/login">
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-white/5">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-primary font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105">
                    Play Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Los Santos Skyline"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-slide-up">
              {/* Status Badge */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-full glass px-5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-foreground">Server Online</span>
                <div className="h-4 w-px bg-border" />
                <span className="text-sm font-semibold text-primary">{playersOnline} Playing</span>
              </div>
              
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                <span className="block">Your Story</span>
                <span className="block mt-2">
                  Begins in{" "}
                  <span className="gradient-text">Los Santos</span>
                </span>
              </h1>
              
              <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground lg:mx-0 leading-relaxed">
                The ultimate GTA San Andreas roleplay experience. 
                Create your character, build your legacy, and write your own story.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Link href="/register">
                  <Button size="lg" className="group h-14 gap-3 bg-primary px-8 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105">
                    <Play className="h-5 w-5" />
                    Start Playing
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <button
                  onClick={copyIP}
                  className="group flex h-14 items-center gap-4 rounded-xl glass px-6 transition-all hover:bg-white/10"
                >
                  <Globe className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-mono text-sm text-foreground">{serverIP}</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/80 group-hover:bg-primary transition-colors">
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Right - Stats Panel */}
            <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl opacity-60" />
                
                <div className="relative glass-strong rounded-3xl p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Live Statistics</h3>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 ring-1 ring-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-500">LIVE</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div 
                        key={stat.label} 
                        className="group rounded-2xl bg-white/5 p-5 transition-all hover:bg-white/10 hover:scale-105"
                      >
                        <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</div>
                        <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-muted-foreground">Server Capacity</span>
                      <span className="font-semibold text-foreground">{playersOnline}/500</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/5">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-accent transition-all duration-1000"
                        style={{ width: `${(playersOnline / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-14 w-8 items-start justify-center rounded-full glass p-2">
            <div className="h-3 w-1.5 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Why Choose Us</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Everything for{" "}
              <span className="gradient-text">Epic Roleplay</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Custom systems, active community, and endless possibilities await.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl glass p-8 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section id="statistics" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-5xl font-bold text-foreground group-hover:text-primary transition-colors sm:text-6xl">{stat.value}</div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] glass-strong">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
            
            <div className="relative px-8 py-24 text-center sm:px-16">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/30">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
                Ready to Start?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
                Create your account in minutes and join our community of roleplayers.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/register">
                  <Button size="lg" className="h-14 gap-3 bg-primary px-10 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105">
                    Create Free Account
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="h-14 bg-transparent px-10 text-base font-semibold border-white/20 hover:bg-white/10">
                    I Have an Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
                <Gamepad2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">LOST</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Roleplay</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
              {['Server Rules', 'Forums', 'Discord', 'Support', 'Privacy'].map((link) => (
                <a key={link} href="#" className="transition-colors hover:text-foreground">{link}</a>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              2024 Lost Roleplay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
