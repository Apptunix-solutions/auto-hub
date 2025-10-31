import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Car, Wrench, DollarSign, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const monthlyServiceData = [
    { month: "Jan", services: 45, revenue: 4500 },
    { month: "Feb", services: 52, revenue: 5200 },
    { month: "Mar", services: 48, revenue: 4800 },
    { month: "Apr", services: 61, revenue: 6100 },
    { month: "May", services: 55, revenue: 5500 },
    { month: "Jun", services: 67, revenue: 6700 },
  ];

  const serviceTypeData = [
    { name: "Oil Change", value: 35, color: "hsl(var(--primary))" },
    { name: "Brake Service", value: 25, color: "hsl(var(--accent))" },
    { name: "Tire Service", value: 20, color: "hsl(var(--success))" },
    { name: "Engine", value: 12, color: "hsl(var(--warning))" },
    { name: "Other", value: 8, color: "hsl(var(--muted))" },
  ];

  const stats = [
    {
      title: "Total Vehicles",
      value: "24",
      change: "+3 this month",
      icon: Car,
      trend: "up",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Active Services",
      value: "8",
      change: "5 in progress",
      icon: Wrench,
      trend: "up",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Total Spent",
      value: "$12,450",
      change: "+12% vs last month",
      icon: DollarSign,
      trend: "up",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Upcoming Services",
      value: "5",
      change: "Next 30 days",
      icon: Calendar,
      trend: "neutral",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
  ];

  const upcomingServices = [
    {
      vehicle: "2021 Toyota Camry",
      service: "Oil Change",
      date: "Nov 25, 2025",
      status: "scheduled",
    },
    {
      vehicle: "2022 Honda Civic",
      service: "Brake Inspection",
      date: "Nov 28, 2025",
      status: "overdue",
    },
    {
      vehicle: "2021 Toyota Camry",
      service: "Tire Rotation",
      date: "Dec 5, 2025",
      status: "scheduled",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your vehicle maintenance</p>
          </div>
          <Link to="/bookings">
            <Button variant="accent" className="gap-2">
              <Calendar className="h-4 w-4" />
              Book Service
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-accent hover:border-accent/50 transition-smooth">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className={`${stat.bgColor} p-2 rounded-lg`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Monthly Services Chart */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Service Trends</CardTitle>
              <CardDescription>Monthly service count and revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="services" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="revenue">Revenue</TabsTrigger>
                </TabsList>
                <TabsContent value="services" className="mt-6">
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={monthlyServiceData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip />
                      <Bar dataKey="services" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="revenue" className="mt-6">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={monthlyServiceData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip />
                      <Line type="monotone" dataKey="revenue" stroke="hsl(var(--accent))" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Service Types Distribution */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Service Distribution</CardTitle>
              <CardDescription>Breakdown by service type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={serviceTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {serviceTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Services */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Upcoming Services
            </CardTitle>
            <CardDescription>Services scheduled in the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-primary p-2 rounded-lg">
                      <Car className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">{service.vehicle}</p>
                      <p className="text-sm text-muted-foreground">{service.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">{service.date}</span>
                    <Badge variant={service.status === "overdue" ? "destructive" : "secondary"}>
                      {service.status === "overdue" ? "Overdue" : "Scheduled"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
