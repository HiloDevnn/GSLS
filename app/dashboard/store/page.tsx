"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ucp/sidebar"
import { Header } from "@/components/ucp/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  ShoppingBag, 
  Search, 
  Star, 
  Sparkles, 
  Crown, 
  Car, 
  Home, 
  Shirt, 
  Gift, 
  Zap,
  Clock,
  Check,
  ShoppingCart,
  Filter,
  Coins
} from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "all", label: "All Items", icon: ShoppingBag },
  { id: "vip", label: "VIP Packages", icon: Crown },
  { id: "vehicles", label: "Vehicles", icon: Car },
  { id: "properties", label: "Properties", icon: Home },
  { id: "cosmetics", label: "Cosmetics", icon: Shirt },
  { id: "boosts", label: "Boosters", icon: Zap },
  { id: "special", label: "Special", icon: Gift },
]

const storeItems = [
  {
    id: 1,
    name: "VIP Gold Package",
    description: "Premium benefits for 30 days including exclusive vehicles, properties, and in-game perks.",
    category: "vip",
    price: 1500,
    originalPrice: 2000,
    image: "/images/vip-gold.png",
    featured: true,
    popular: true,
    benefits: ["Exclusive vehicles", "VIP chat badge", "Priority support", "Bonus XP +25%"],
    duration: "30 days",
  },
  {
    id: 2,
    name: "VIP Silver Package",
    description: "Great value VIP package with essential benefits for casual players.",
    category: "vip",
    price: 800,
    originalPrice: null,
    image: "/images/vip-silver.png",
    featured: false,
    popular: false,
    benefits: ["VIP chat badge", "Bonus XP +10%", "Custom spawn location"],
    duration: "30 days",
  },
  {
    id: 3,
    name: "Infernus Sports Car",
    description: "The fastest sports car in Los Santos. Dominate the streets in style.",
    category: "vehicles",
    price: 2500,
    originalPrice: 3000,
    image: "/images/infernus.png",
    featured: true,
    popular: true,
    benefits: ["Top speed: 240 km/h", "Custom paint job", "Exclusive model"],
    duration: "Permanent",
  },
  {
    id: 4,
    name: "Turismo R",
    description: "Luxury supercar with unmatched handling and acceleration.",
    category: "vehicles",
    price: 2200,
    originalPrice: null,
    image: "/images/turismo.png",
    featured: false,
    popular: false,
    benefits: ["Top speed: 220 km/h", "Premium interior", "Rare model"],
    duration: "Permanent",
  },
  {
    id: 5,
    name: "Vinewood Mansion",
    description: "Luxurious mansion in the Vinewood Hills with stunning views.",
    category: "properties",
    price: 5000,
    originalPrice: 6500,
    image: "/images/mansion.png",
    featured: true,
    popular: false,
    benefits: ["10 car garage", "Pool & helipad", "Interior customization", "Safe storage"],
    duration: "Permanent",
  },
  {
    id: 6,
    name: "Downtown Penthouse",
    description: "Modern penthouse apartment in the heart of downtown Los Santos.",
    category: "properties",
    price: 3500,
    originalPrice: null,
    image: "/images/penthouse.png",
    featured: false,
    popular: true,
    benefits: ["City views", "5 car garage", "Modern interior"],
    duration: "Permanent",
  },
  {
    id: 7,
    name: "Exclusive Outfit Pack",
    description: "Collection of 10 exclusive outfits not available anywhere else.",
    category: "cosmetics",
    price: 500,
    originalPrice: 750,
    image: "/images/outfits.png",
    featured: false,
    popular: true,
    benefits: ["10 unique outfits", "Seasonal variations", "Mix & match"],
    duration: "Permanent",
  },
  {
    id: 8,
    name: "Custom Name Color",
    description: "Stand out with a custom colored name tag visible to all players.",
    category: "cosmetics",
    price: 300,
    originalPrice: null,
    image: "/images/namecolor.png",
    featured: false,
    popular: false,
    benefits: ["Any color choice", "Gradient options", "Glow effects"],
    duration: "Permanent",
  },
  {
    id: 9,
    name: "XP Booster x2",
    description: "Double your experience points gain for 7 days.",
    category: "boosts",
    price: 400,
    originalPrice: null,
    image: "/images/xpboost.png",
    featured: false,
    popular: true,
    benefits: ["2x XP multiplier", "Stacks with VIP", "All activities"],
    duration: "7 days",
  },
  {
    id: 10,
    name: "Money Booster x2",
    description: "Double your money earnings from all jobs and activities.",
    category: "boosts",
    price: 450,
    originalPrice: 600,
    image: "/images/moneyboost.png",
    featured: false,
    popular: false,
    benefits: ["2x money multiplier", "All job types", "Passive income boost"],
    duration: "7 days",
  },
  {
    id: 11,
    name: "Limited Edition Bundle",
    description: "Exclusive bundle with rare items available for a limited time only.",
    category: "special",
    price: 3500,
    originalPrice: 5000,
    image: "/images/bundle.png",
    featured: true,
    popular: true,
    benefits: ["Rare vehicle", "Exclusive outfit", "Special badge", "Bonus credits"],
    duration: "Limited",
  },
  {
    id: 12,
    name: "Founders Pack",
    description: "Show your support with the original founders pack. Limited availability.",
    category: "special",
    price: 1000,
    originalPrice: null,
    image: "/images/founders.png",
    featured: false,
    popular: false,
    benefits: ["Founder badge", "Exclusive title", "Priority queue"],
    duration: "Permanent",
  },
]

export default function StorePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cart, setCart] = useState<number[]>([])

  const filteredItems = storeItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredItems = storeItems.filter((item) => item.featured)

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id])
    }
  }

  const removeFromCart = (id: number) => {
    setCart(cart.filter((itemId) => itemId !== id))
  }

  const isInCart = (id: number) => cart.includes(id)

  const cartTotal = cart.reduce((total, id) => {
    const item = storeItems.find((i) => i.id === id)
    return total + (item?.price || 0)
  }, 0)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        mobileOpen={mobileMenuOpen} 
        onMobileClose={() => setMobileMenuOpen(false)} 
      />
      
      <main className="transition-all duration-300 lg:ml-64">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        
        <div className="p-4 sm:p-6">
          {/* Store Header */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-foreground sm:text-2xl">Store</h1>
                <Badge className="bg-primary/20 text-primary">New Items</Badge>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">Purchase premium items, VIP packages, and more</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2">
                <Coins className="h-5 w-5 text-primary" />
                <span className="font-bold text-primary">12,500</span>
                <span className="text-sm text-muted-foreground">Credits</span>
              </div>
              <Button className="relative bg-primary hover:bg-primary/90">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
                {cart.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    {cart.length}
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Featured Banner */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/20 via-primary/10 to-purple-500/10 p-4 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 sm:h-16 sm:w-16">
                  <Sparkles className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">Limited Time Offer</h2>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    Get 30% off on all VIP packages this week!
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-lg bg-background/50 px-3 py-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium text-foreground">2d 14h 32m left</span>
                </div>
                <Button className="bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90">
                  View Deals
                </Button>
              </div>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 bg-card border-border/50"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`shrink-0 gap-2 ${
                    selectedCategory === category.id 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-transparent border-border/50 hover:bg-primary/10 hover:border-primary/50"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Items */}
          {selectedCategory === "all" && searchQuery === "" && (
            <div className="mb-8">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
                <Star className="h-5 w-5 text-yellow-400" />
                Featured Items
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featuredItems.slice(0, 3).map((item) => (
                  <Card key={item.id} className="group overflow-hidden border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                    <CardContent className="p-0">
                      <div className="relative h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-4 sm:h-40">
                        <div className="absolute right-2 top-2 flex gap-1">
                          {item.originalPrice && (
                            <Badge className="bg-red-500 text-white">
                              -{Math.round((1 - item.price / item.originalPrice) * 100)}%
                            </Badge>
                          )}
                          {item.popular && (
                            <Badge className="bg-yellow-500/20 text-yellow-400">Popular</Badge>
                          )}
                        </div>
                        <div className="flex h-full items-center justify-center">
                          {item.category === "vip" && <Crown className="h-16 w-16 text-primary sm:h-20 sm:w-20" />}
                          {item.category === "vehicles" && <Car className="h-16 w-16 text-primary sm:h-20 sm:w-20" />}
                          {item.category === "properties" && <Home className="h-16 w-16 text-primary sm:h-20 sm:w-20" />}
                          {item.category === "special" && <Gift className="h-16 w-16 text-primary sm:h-20 sm:w-20" />}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-card-foreground">{item.name}</h3>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {item.benefits.slice(0, 2).map((benefit, i) => (
                            <Badge key={i} variant="outline" className="bg-transparent text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-primary">{item.price}</span>
                            <span className="text-sm text-muted-foreground">credits</span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                            )}
                          </div>
                          <Button 
                            size="sm"
                            onClick={() => isInCart(item.id) ? removeFromCart(item.id) : addToCart(item.id)}
                            className={isInCart(item.id) ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary/90"}
                          >
                            {isInCart(item.id) ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Items Grid */}
          <div>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              {selectedCategory === "all" ? "All Items" : categories.find(c => c.id === selectedCategory)?.label}
              <span className="ml-2 text-sm font-normal text-muted-foreground">({filteredItems.length} items)</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                  <CardContent className="p-0">
                    <div className="relative h-28 bg-gradient-to-br from-secondary via-secondary/50 to-transparent p-4 sm:h-32">
                      <div className="absolute right-2 top-2 flex gap-1">
                        {item.originalPrice && (
                          <Badge className="bg-red-500 text-white text-[10px]">
                            -{Math.round((1 - item.price / item.originalPrice) * 100)}%
                          </Badge>
                        )}
                        {item.popular && (
                          <Badge className="bg-yellow-500/20 text-yellow-400 text-[10px]">Popular</Badge>
                        )}
                      </div>
                      <div className="flex h-full items-center justify-center">
                        {item.category === "vip" && <Crown className="h-12 w-12 text-primary sm:h-14 sm:w-14" />}
                        {item.category === "vehicles" && <Car className="h-12 w-12 text-blue-400 sm:h-14 sm:w-14" />}
                        {item.category === "properties" && <Home className="h-12 w-12 text-green-400 sm:h-14 sm:w-14" />}
                        {item.category === "cosmetics" && <Shirt className="h-12 w-12 text-pink-400 sm:h-14 sm:w-14" />}
                        {item.category === "boosts" && <Zap className="h-12 w-12 text-yellow-400 sm:h-14 sm:w-14" />}
                        {item.category === "special" && <Gift className="h-12 w-12 text-purple-400 sm:h-14 sm:w-14" />}
                      </div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-card-foreground">{item.name}</h3>
                        <Badge variant="outline" className="shrink-0 bg-transparent text-[10px]">
                          {item.duration}
                        </Badge>
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">{item.description}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg font-bold text-primary sm:text-xl">{item.price}</span>
                          <span className="text-xs text-muted-foreground">cr</span>
                          {item.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">{item.originalPrice}</span>
                          )}
                        </div>
                        <Button 
                          size="sm"
                          onClick={() => isInCart(item.id) ? removeFromCart(item.id) : addToCart(item.id)}
                          className={`h-8 ${isInCart(item.id) ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary/90"}`}
                        >
                          {isInCart(item.id) ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">No items found</h3>
                <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="outline" 
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSelectedCategory("all")
                    setSearchQuery("")
                  }}
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Cart Summary (Fixed Bottom on Mobile) */}
          {cart.length > 0 && (
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-sm lg:left-64">
              <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{cart.length} items</span>
                  </div>
                  <div className="h-6 w-px bg-border" />
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-primary">{cartTotal}</span>
                    <span className="text-sm text-muted-foreground">credits total</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 bg-transparent sm:flex-none"
                    onClick={() => setCart([])}
                  >
                    Clear Cart
                  </Button>
                  <Button className="flex-1 bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90 sm:flex-none">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Spacer for fixed cart */}
          {cart.length > 0 && <div className="h-24" />}
        </div>
      </main>
    </div>
  )
}
