import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CheckCircle2, AlertCircle, Eye } from "lucide-react";

interface ServiceRecord {
  id: string;
  vehicleName: string;
  serviceType: string;
  status: "completed" | "in-progress" | "scheduled";
  date: Date;
  mechanic: string;
  cost?: number;
  description: string;
}

const Services = () => {
  const services: ServiceRecord[] = [
    {
      id: "1",
      vehicleName: "2021 Toyota Camry",
      serviceType: "Oil Change & Filter",
      status: "completed",
      date: new Date("2025-01-15"),
      mechanic: "John Smith",
      cost: 89.99,
      description: "Standard oil change with synthetic oil and new filter",
    },
    {
      id: "2",
      vehicleName: "2022 Honda Civic",
      serviceType: "Brake Inspection",
      status: "in-progress",
      date: new Date("2025-01-20"),
      mechanic: "Sarah Johnson",
      description: "Complete brake system inspection and pad replacement",
    },
    {
      id: "3",
      vehicleName: "2021 Toyota Camry",
      serviceType: "Tire Rotation",
      status: "scheduled",
      date: new Date("2025-02-10"),
      mechanic: "Mike Davis",
      description: "Standard tire rotation and pressure check",
    },
  ];

  const getStatusConfig = (status: ServiceRecord["status"]) => {
    switch (status) {
      case "completed":
        return {
          badge: "success" as const,
          icon: CheckCircle2,
          label: "Completed",
        };
      case "in-progress":
        return {
          badge: "warning" as const,
          icon: Clock,
          label: "In Progress",
        };
      case "scheduled":
        return {
          badge: "secondary" as const,
          icon: AlertCircle,
          label: "Scheduled",
        };
    }
  };

  const filterByStatus = (status?: ServiceRecord["status"]) => {
    return status ? services.filter((s) => s.status === status) : services;
  };

  const ServiceCard = ({ service }: { service: ServiceRecord }) => {
    const config = getStatusConfig(service.status);
    const StatusIcon = config.icon;

    return (
      <Card className="hover:shadow-md transition-smooth border-2 hover:border-accent/30">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl mb-1">{service.serviceType}</CardTitle>
              <CardDescription>{service.vehicleName}</CardDescription>
            </div>
            <Badge variant={config.badge} className="gap-1">
              <StatusIcon className="h-3 w-3" />
              {config.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{service.description}</p>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Mechanic:</span>
              <span className="font-medium">{service.mechanic}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{service.date.toLocaleDateString()}</span>
            </div>
            {service.cost && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cost:</span>
                <span className="font-semibold text-accent">${service.cost.toFixed(2)}</span>
              </div>
            )}
          </div>

          <Button variant="outline" className="w-full gap-2">
            <Eye className="h-4 w-4" />
            View Details
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Service History</h1>
          <p className="text-muted-foreground">Track all your vehicle maintenance and repairs</p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Services</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterByStatus("completed").map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterByStatus("in-progress").map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterByStatus("scheduled").map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
