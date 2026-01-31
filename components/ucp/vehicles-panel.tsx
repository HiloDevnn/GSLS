import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Fuel, Wrench, MapPin } from "lucide-react"

const vehicles = [
  {
    name: "Sultan RS",
    plate: "LOST 420",
    fuel: 78,
    health: 95,
    location: "LSPD Parking",
    insured: true,
  },
  {
    name: "Infernus",
    plate: "GTA KING",
    fuel: 45,
    health: 100,
    location: "Personal Garage",
    insured: true,
  },
  {
    name: "NRG-500",
    plate: "FAST 01",
    fuel: 23,
    health: 67,
    location: "Los Santos",
    insured: false,
  },
]

export function VehiclesPanel() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-card-foreground">
          <Car className="h-5 w-5 text-primary" />
          My Vehicles
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.plate}
            className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-3 transition-colors hover:bg-secondary/50"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Car className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium text-card-foreground">{vehicle.name}</p>
                  {vehicle.insured ? (
                    <Badge variant="secondary" className="bg-green-500/10 text-green-400 text-[10px]">
                      Insured
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-destructive/10 text-destructive text-[10px]">
                      Uninsured
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{vehicle.plate}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <Fuel className="h-3.5 w-3.5 text-yellow-400" />
                <span className="text-muted-foreground">{vehicle.fuel}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wrench className="h-3.5 w-3.5 text-accent" />
                <span className="text-muted-foreground">{vehicle.health}%</span>
              </div>
              <div className="hidden items-center gap-1.5 sm:flex">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-muted-foreground">{vehicle.location}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
