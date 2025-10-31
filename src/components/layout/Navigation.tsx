import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Wrench, LayoutDashboard, Calendar } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: LayoutDashboard },
    { path: "/vehicles", label: "Vehicles", icon: Car },
    { path: "/services", label: "Services", icon: Wrench },
    { path: "/bookings", label: "Book Service", icon: Calendar },
  ];

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Car className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AutoCare Pro
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          <Button variant="accent">Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
