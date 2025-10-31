import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Car, Calendar, Wrench } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  licensePlate: string;
  mileage: number;
  nextService?: Date;
}

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: "1",
      make: "Toyota",
      model: "Camry",
      year: 2021,
      vin: "1HGBH41JXMN109186",
      licensePlate: "ABC-1234",
      mileage: 45000,
      nextService: new Date("2025-12-15"),
    },
    {
      id: "2",
      make: "Honda",
      model: "Civic",
      year: 2022,
      vin: "2HGFC2F59HH123456",
      licensePlate: "XYZ-5678",
      mileage: 32000,
      nextService: new Date("2025-11-20"),
    },
  ]);

  const getServiceStatus = (nextService?: Date) => {
    if (!nextService) return { label: "No service scheduled", variant: "secondary" as const };
    
    const daysUntil = Math.ceil((nextService.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysUntil < 0) return { label: "Overdue", variant: "destructive" as const };
    if (daysUntil < 30) return { label: `Due in ${daysUntil} days`, variant: "warning" as const };
    return { label: "Up to date", variant: "success" as const };
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Vehicles</h1>
            <p className="text-muted-foreground">Manage your vehicle fleet and maintenance schedules</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="accent" className="gap-2">
                <Plus className="h-5 w-5" />
                Add Vehicle
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Vehicle</DialogTitle>
                <DialogDescription>Enter your vehicle details below</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="make">Make</Label>
                    <Input id="make" placeholder="Toyota" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" placeholder="Camry" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 25 }, (_, i) => 2025 - i).map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vin">VIN</Label>
                  <Input id="vin" placeholder="1HGBH41JXMN109186" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plate">License Plate</Label>
                  <Input id="plate" placeholder="ABC-1234" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mileage">Current Mileage</Label>
                  <Input id="mileage" type="number" placeholder="45000" />
                </div>
                <Button variant="hero" className="w-full">Add Vehicle</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => {
            const status = getServiceStatus(vehicle.nextService);
            return (
              <Card key={vehicle.id} className="hover:shadow-lg transition-smooth border-2 hover:border-accent/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <Car className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant={status.variant}>{status.label}</Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </CardTitle>
                  <CardDescription>License: {vehicle.licensePlate}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">VIN:</span>
                      <span className="font-mono">{vehicle.vin.slice(-8)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mileage:</span>
                      <span className="font-semibold">{vehicle.mileage.toLocaleString()} mi</span>
                    </div>
                    {vehicle.nextService && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Next Service:</span>
                        <span className="font-semibold">
                          {vehicle.nextService.toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="outline" className="flex-1 gap-2">
                      <Calendar className="h-4 w-4" />
                      Book
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Wrench className="h-4 w-4" />
                      History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
