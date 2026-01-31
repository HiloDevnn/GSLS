"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Gamepad2, Eye, EyeOff, ArrowLeft, Shield, Users, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push("/characters")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen">
      {/* Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[150px] animate-glow" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Left Side - Form */}
      <div className="relative flex w-full flex-col justify-center px-6 py-12 lg:w-[500px] lg:px-14 xl:w-[560px] xl:px-20">
        <div className="relative mx-auto w-full max-w-[380px]">
          {/* Back Link */}
          <Link 
            href="/" 
            className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Logo */}
          <div className="mb-12 flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-2xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-xl shadow-primary/30">
                <Gamepad2 className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">LOST ROLEPLAY</h1>
              <p className="text-sm font-medium text-muted-foreground">User Control Panel</p>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground">Welcome back</h2>
            <p className="mt-3 text-muted-foreground">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-foreground">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="h-13 rounded-xl border-border/50 bg-white/5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-13 rounded-xl border-border/50 bg-white/5 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox id="remember" className="rounded-md border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
                Forgot password?
              </a>
            </div>

            <Button 
              type="submit" 
              className="h-13 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Register Link */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            {"Don't have an account?"}{" "}
            <Link href="/register" className="font-semibold text-primary transition-colors hover:text-primary/80">
              Create one here
            </Link>
          </p>

          {/* Server Status */}
          <div className="mt-12 overflow-hidden rounded-2xl glass">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-foreground">Server Status</span>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500 ring-1 ring-emerald-500/20">ONLINE</span>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-muted-foreground">Players Online</span>
              <span className="text-sm font-bold text-foreground">247/500</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="relative hidden flex-1 lg:block">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Los Santos" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-16">
          <div className="max-w-lg text-center">
            <div className="mb-10 inline-flex h-24 w-24 items-center justify-center rounded-3xl glass animate-float">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              Experience True Roleplay
            </h2>
            <p className="mb-12 text-lg text-muted-foreground leading-relaxed">
              Join our community of dedicated roleplayers. Create unique characters, 
              build relationships, and write your own story.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, value: '50+', label: 'Factions' },
                { icon: Users, value: '15K+', label: 'Players' },
                { icon: Zap, value: '5+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl glass p-6 transition-all hover:bg-white/10 hover:scale-105">
                  <stat.icon className="mx-auto mb-3 h-7 w-7 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
