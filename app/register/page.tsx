"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Gamepad2, Eye, EyeOff, ArrowLeft, Check, X, Shield, Sparkles, Users, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [acceptedRules, setAcceptedRules] = useState(false)
  const router = useRouter()

  const passwordRequirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains uppercase", met: /[A-Z]/.test(password) },
  ]

  const allRequirementsMet = passwordRequirements.every(req => req.met)
  const passwordStrength = passwordRequirements.filter(req => req.met).length

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptedRules || !allRequirementsMet) return
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
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[150px] animate-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Left Side - Visual */}
      <div className="relative hidden flex-1 lg:block">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Los Santos" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-16">
          <div className="max-w-lg text-center">
            <div className="mb-10 inline-flex h-24 w-24 items-center justify-center rounded-3xl glass animate-float">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              Begin Your Story
            </h2>
            <p className="mb-12 text-lg text-muted-foreground leading-relaxed">
              Create your account and start your roleplay journey. 
              Build your character and make your mark in Los Santos.
            </p>
            
            <div className="space-y-4 text-left">
              {[
                { icon: Zap, title: '100% Free to Play', desc: 'No subscription required' },
                { icon: Users, title: 'Multiple Characters', desc: 'Create up to 5 unique characters' },
                { icon: Shield, title: 'Active Community', desc: 'Discord & Forums included' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:bg-white/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="relative flex w-full flex-col justify-center px-6 py-12 lg:w-[540px] lg:px-14 xl:w-[600px] xl:px-20">
        <div className="relative mx-auto w-full max-w-[400px]">
          {/* Back Link */}
          <Link 
            href="/" 
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Logo */}
          <div className="mb-10 flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-2xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-xl shadow-primary/30">
                <Gamepad2 className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">LOST ROLEPLAY</h1>
              <p className="text-sm font-medium text-muted-foreground">User Control Panel</p>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground">Create Account</h2>
            <p className="mt-3 text-muted-foreground">
              Join our community and start roleplaying
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-foreground">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="e.g., John_Doe"
                className="h-12 rounded-xl border-border/50 bg-white/5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <p className="text-xs text-muted-foreground">Use Firstname_Lastname format for your in-game name</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-xl border-border/50 bg-white/5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl border-border/50 bg-white/5 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
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
              
              {/* Password Strength */}
              {password && (
                <div className="mt-4 rounded-xl glass p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1 flex gap-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`h-1.5 flex-1 rounded-full transition-colors ${
                            passwordStrength >= level
                              ? passwordStrength === 1 ? 'bg-red-500' 
                                : passwordStrength === 2 ? 'bg-amber-500' 
                                : 'bg-emerald-500'
                              : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-xs font-medium ${
                      passwordStrength === 3 ? 'text-emerald-500' 
                        : passwordStrength === 2 ? 'text-amber-500' 
                        : 'text-red-500'
                    }`}>
                      {passwordStrength === 3 ? 'Strong' : passwordStrength === 2 ? 'Medium' : 'Weak'}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {passwordRequirements.map((req) => (
                      <div key={req.label} className="flex items-center gap-2 text-sm">
                        <div className={`flex h-5 w-5 items-center justify-center rounded-full transition-colors ${req.met ? 'bg-emerald-500/20' : 'bg-white/5'}`}>
                          {req.met ? (
                            <Check className="h-3 w-3 text-emerald-500" />
                          ) : (
                            <X className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                        <span className={`transition-colors ${req.met ? "text-emerald-500" : "text-muted-foreground"}`}>
                          {req.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="h-12 rounded-xl border-border/50 bg-white/5 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl glass p-4">
              <Checkbox 
                id="rules" 
                checked={acceptedRules}
                onCheckedChange={(checked) => setAcceptedRules(checked as boolean)}
                className="mt-0.5 rounded-md border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
              />
              <Label htmlFor="rules" className="text-sm leading-relaxed text-muted-foreground cursor-pointer">
                I agree to the{" "}
                <a href="#" className="font-medium text-primary hover:underline">Server Rules</a>
                {" "}and{" "}
                <a href="#" className="font-medium text-primary hover:underline">Terms of Service</a>
              </Label>
            </div>

            <Button 
              type="submit" 
              className="h-13 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:shadow-none disabled:hover:scale-100"
              disabled={isLoading || !acceptedRules || !allRequirementsMet}
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Creating account...
                </div>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary transition-colors hover:text-primary/80">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
