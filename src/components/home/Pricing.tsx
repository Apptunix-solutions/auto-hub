import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for individual car owners",
      features: [
        "Up to 2 vehicles",
        "Basic service tracking",
        "Email notifications",
        "Mobile access",
        "Service history",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for small fleets",
      features: [
        "Up to 10 vehicles",
        "Advanced analytics",
        "Priority booking",
        "SMS & Email notifications",
        "Dedicated support",
        "Custom reports",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited vehicles",
        "White-label solution",
        "Advanced integrations",
        "24/7 Premium support",
        "Custom features",
        "Multi-location support",
        "Training & onboarding",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-2 relative hover:shadow-xl transition-smooth ${
                plan.popular
                  ? "border-accent shadow-accent scale-105 bg-gradient-to-br from-card to-accent/5"
                  : "hover:border-accent/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="bg-gradient-accent text-accent-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-success/20 rounded-full p-1">
                        <Check className="h-4 w-4 text-success" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/bookings" className="block">
                  <Button
                    variant={plan.popular ? "accent" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
