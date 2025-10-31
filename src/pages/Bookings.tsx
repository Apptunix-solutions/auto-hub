import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Clock, Car, Wrench } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Bookings = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const serviceTypes = [
    "Oil Change",
    "Brake Service",
    "Tire Rotation",
    "Engine Diagnostics",
    "Transmission Service",
    "Air Conditioning Service",
    "Battery Replacement",
    "General Inspection",
  ];

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const vehicles = [
    "2021 Toyota Camry (ABC-1234)",
    "2022 Honda Civic (XYZ-5678)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Service Booked Successfully!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Book a Service</h1>
          <p className="text-muted-foreground">Schedule your vehicle maintenance appointment</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-accent/30">
            <CardHeader className="text-center">
              <div className="mx-auto bg-gradient-accent p-3 rounded-full w-fit mb-2">
                <Car className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Select Vehicle</CardTitle>
              <CardDescription>Choose which vehicle needs service</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-accent/30">
            <CardHeader className="text-center">
              <div className="mx-auto bg-gradient-accent p-3 rounded-full w-fit mb-2">
                <Wrench className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Pick Service</CardTitle>
              <CardDescription>Select the type of maintenance</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-accent/30">
            <CardHeader className="text-center">
              <div className="mx-auto bg-gradient-accent p-3 rounded-full w-fit mb-2">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Choose Time</CardTitle>
              <CardDescription>Pick a convenient date and time</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Service Details</CardTitle>
            <CardDescription>Fill in the information below to complete your booking</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="vehicle">Select Vehicle</Label>
                <Select>
                  <SelectTrigger id="vehicle">
                    <SelectValue placeholder="Choose your vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicles.map((vehicle) => (
                      <SelectItem key={vehicle} value={vehicle}>
                        {vehicle}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Type</Label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mileage">Current Mileage</Label>
                <Input
                  id="mileage"
                  type="number"
                  placeholder="45000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific concerns or requests?"
                  rows={4}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Confirm Booking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bookings;
