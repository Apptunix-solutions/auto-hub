import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Car, Wrench, Calendar, Shield, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";

const Home = () => {
  const features = [
    {
      icon: Car,
      title: "Vehicle Management",
      description: "Track all your vehicles and their maintenance history in one place",
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book maintenance appointments with just a few clicks",
    },
    {
      icon: Wrench,
      title: "Service Tracking",
      description: "Monitor ongoing and completed services with detailed records",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Certified mechanics and quality parts for every service",
    },
    {
      icon: Clock,
      title: "Timely Reminders",
      description: "Never miss a maintenance schedule with automatic notifications",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Insights and reports on your vehicle maintenance patterns",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Services Completed" },
    { value: "5,000+", label: "Happy Customers" },
    { value: "50+", label: "Expert Mechanics" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Professional Car Maintenance
            <br />
            <span className="text-accent-foreground">Made Simple</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Manage your vehicle services, track maintenance history, and schedule appointments with ease
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/bookings">
              <Button size="lg" variant="accent" className="gap-2">
                Book Service Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/vehicles">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                My Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AutoCare Pro?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your vehicles running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-accent hover:border-accent/50 transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMTEuMDUtOC45NS0yMC0yMC0yMFMtNCAxLjk1LTQgMTNzOC45NSAxNiAyMCAxNiAyMC00Ljk1IDIwLTE2em0wIDBjMC0xMS4wNSA4Ljk1LTIwIDIwLTIwczIwIDguOTUgMjAgMjAtOC45NSAxNi0yMCAxNi0yMC00Ljk1LTIwLTE2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust AutoCare Pro for their vehicle maintenance
          </p>
          <Link to="/bookings">
            <Button size="lg" variant="accent" className="gap-2 shadow-lg hover:shadow-xl">
              Schedule Your First Service
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
